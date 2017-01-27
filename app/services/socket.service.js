(function(){
    "use strict";
    angular
        .module("App")
        .service("socketService",socketService);

    socketService.$inject = ['$window'];

    function socketService($window){
        var sockets = io($window.location.hostname + ":9200");

        var service = {
            sockets:sockets,
            sendAuthData:sendAuthData,
            sendRegData:sendRegData,
            tokenValidate:tokenValidate,
            getProfile:getProfile,
            getUserList:getUserList
        };
        return service;

        function sendAuthData(models){
            var vm = this;
            return new Promise(function(resolve,reject){
                if(!vm.sockets.connected)return reject(false);

                vm.sockets.emit("user::authorization",JSON.stringify(models),function(data){
                    data = JSON.parse(data);

                    if(data.error)return reject(false);
                    resolve(data.token);
                });
            });
        }

        function sendRegData(models){
            var vm = this;
            return new Promise(function(resolve,reject){
                if(!vm.sockets.connected)return reject(false);

                vm.sockets.emit("user::registration",JSON.stringify(models),function(data){
                   data = JSON.parse(data);

                    if(data.error)return reject(false);

                    resolve(true);
                });
            });
        }

        function tokenValidate(){
            var vm = this;

            return new Promise(function(resolve,reject){
                if(!vm.sockets.connected)
                   vm.sockets.on("connect",function(){
                       vm.sockets.emit("user::token",JSON.stringify({token:localStorage.getItem("socket::token")}),function(data){
                           data = JSON.parse(data);
                           console.log(data);
                           if(data.error)return reject(data);
                           resolve(true);
                       });
                   });
                else
                   vm.sockets.emit("user::token",JSON.stringify({token:localStorage.getItem("socket::token")}),function(data){
                      data = JSON.parse(data);
                      console.log(data);
                      if(data.error)return reject(data);
                      resolve(true);
                  });
            });
        }

        function getProfile(){
            var vm = this;
            return new Promise(function (resolve,reject) {
                vm.sockets.emit("user::profile",{},function(data){
                    data = JSON.parse(data);

                    if(data.error)return reject(data);
                    resolve(data.profile);
                });
            })
        }

        function getUserList() {
            var vm = this;
            return new Promise(function(resolve,reject){
                if(!vm.sockets.connected)return reject(false);
                vm.sockets.emit("")

            });
        }
    }
})();

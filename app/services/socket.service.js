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
            sendAuthData:sendAuthData
        };
        return service;

        function sendAuthData(models){
            var vm = this;
            console.log(vm.sockets);
            return new Promise(function(resolve,reject){
                if(!vm.sockets.connected)return reject(false);

                vm.sockets.emit("user::authorization",JSON.stringify(models),function(data){

                });
            });
        }
    }
})();

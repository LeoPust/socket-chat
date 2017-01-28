(function(){
    "use strict";
    angular
        .module("App")
        .service("socketListenersService",socketListenersService);

    socketListenersService.$inject = ['socketService','sideBarService','homeService','$rootScope'];

    function socketListenersService(socketService,sideBarService,homeService,$rootScope){

        var service = {
            sideBarListeners:sideBarListeners,
            homeListeners:homeListeners
        };
        return service;

        function sideBarListeners(){
            var vm = this;
            socketService.sockets.on('connect',function(){
                socketService.sockets.on("room::users::status",function(result){
                    result = JSON.parse(result);

                    console.log(result);
                    sideBarService.models.users.forEach(function (item) {
                        if (item.id == result.id){
                            item.status = result.status;
                            item.socket_id = result.socket_id || null;
                            if(result.status == "offline"){
                                for(var i in homeService.rooms){
                                    homeService.rooms[i].id == item.id ?
                                        homeService.rooms.splice(i,1)
                                        : null;
                                }
                                item.socket_id = null;
                            }
                            console.log(item);
                            $rootScope.$apply();
                        }
                    });
                })
            });
        }

        function homeListeners(){
            socketService.sockets.on("room::open",function (data) {
                data = JSON.parse(data);
                console.log(data);
                sideBarService.models.users.forEach(function(item){
                    if(item.id == data.id){
                        item.socket_id = data.socket_id;
                        homeService.addRoom(item);
                        $rootScope.$apply();
                        return;
                    }
                })
            })
        }
    }
})();

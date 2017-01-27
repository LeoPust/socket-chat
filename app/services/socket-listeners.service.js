(function(){
    "use strict";
    angular
        .module("App")
        .service("socketListenersService",socketListenersService);

    socketListenersService.$inject = ['socketService','sideBarService','$rootScope'];

    function socketListenersService(socketService,sideBarService,$rootScope){

        var service = {
            sideBarListeners:sideBarListeners
        };
        return service;

        function sideBarListeners(){
            var vm = this;
            socketService.sockets.on('connect',function(){
                socketService.sockets.on("room::users::status",function(result){
                    result = JSON.parse(result);

                    sideBarService.models.users.forEach(function (item) {
                        if (item.id == result.id){
                            item.status = result.status;
                            $rootScope.$apply();
                        }
                    });
                })
            });
        }
    }
})();

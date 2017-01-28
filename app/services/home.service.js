(function(){
    "use strict";
    angular
        .module("App")
        .service("homeService",homeService);

    homeService.$inject = ['socketService'];

    function homeService(socketService){
        var rooms = [];

        var service = {
            rooms:rooms,
            addRoom:addRoom
        };
        return service;

        function addRoom(data){
            var vm = this;

            if(!data.socket_id)return;
            for(var i in vm.rooms){
                if(vm.rooms[i].id == data.id)return;
            }
            socketService.sockets.emit("room::open",JSON.stringify({id:data.socket_id}));
            vm.rooms.push(data);
        }
    }
})();

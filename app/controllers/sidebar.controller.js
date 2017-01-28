(function(){
    "use strict";
    angular
        .module("App")
        .controller("SideBarController",SideBarController);

    SideBarController.$inject = ['sideBarService','socketListenersService','homeService'];

    function SideBarController(sideBarService,socketListenersService,homeService){
        var vm = this;

        vm.models = sideBarService.models;
        vm.profile = sideBarService.profile;
        vm.tokenValidate = sideBarService.tokenValidate;
        vm.openRoom = openRoom;
        activate();

        function activate(){
            vm.tokenValidate();
            socketListenersService.sideBarListeners();
        }

        function openRoom(index){
            homeService.addRoom(vm.models.users[index]);
        }
    }
})();

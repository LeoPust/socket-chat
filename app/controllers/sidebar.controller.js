(function(){
    "use strict";
    angular
        .module("App")
        .controller("SideBarController",SideBarController);

    SideBarController.$inject = ['sideBarService','socketListenersService'];

    function SideBarController(sideBarService,socketListenersService){
        var vm = this;

        vm.models = sideBarService.models;
        vm.profile = sideBarService.profile;
        vm.tokenValidate = sideBarService.tokenValidate;
        activate();

        function activate(){
            vm.tokenValidate();
            socketListenersService.sideBarListeners();
        }
    }
})();

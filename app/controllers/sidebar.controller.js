(function(){
    "use strict";
    angular
        .module("App")
        .controller("SideBarController",SideBarController);

    SideBarController.$inject = ['sideBarService'];

    function SideBarController(sideBarService){
        var vm = this;

        vm.models = sideBarService.models;
        vm.profile = sideBarService.profile;
        vm.tokenValidate = sideBarService.tokenValidate;
        activate();

        function activate(){
            vm.tokenValidate();
        }
    }
})();

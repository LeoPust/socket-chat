(function(){
    "use strict";
    angular
        .module("App")
        .controller("SideBarController",SideBarController);

    SideBarController.$inject = ['sideBarService'];

    function SideBarController(sideBarService){
        var vm = this;

        vm.models = sideBarService.models;
    }
})();

(function(){
    "use strict";
    angular
        .module("App")
        .controller("RegistrationController",RegistrationController);

    RegistrationController.$inject = ['regService'];
    
    function RegistrationController(regService){
        var vm = this;

        vm.models = regService.models;
        vm.sendRegData = regService.sendRegData;
    }
})();

(function(){
    "use strict";
    angular
        .module("App")
        .controller("RegistrationController",RegistrationController);

    RegistrationController.$inject = ['$timeout','regService'];
    
    function RegistrationController($timeout,regService){
        var vm = this;

        vm.models = regService.models;
        vm.sendRegData = regService.sendRegData;
        vm.loading = true;

        activate();

        function activate(){
            $timeout(function(){
                vm.loading = false;
            },1000);
        }
    }
})();

(function(){
    "use strict";
    angular
        .module("App")
        .controller("AuthorizationController",AuthorizationController);

    AuthorizationController.$inject = ['$timeout','authService'];
    
    function AuthorizationController($timeout,authService){
        var vm = this;
        
        vm.models = authService;
        vm.sendAuthData = authService.sendAuthData;
        vm.loading = true;

        activate();

        function activate(){
            $timeout(function(){
                vm.loading = false;
            },1000);
        }
    }
})();
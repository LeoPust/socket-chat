(function(){
    "use strict";
    angular
        .module("App")
        .controller("AuthorizationController",AuthorizationController);

    AuthorizationController.$inject = ['authService'];
    
    function AuthorizationController(authService){
        var vm = this;
        
        vm.models = authService;
        vm.sendAuthData = authService.sendAuthData;
    }
})();
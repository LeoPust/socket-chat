(function(){
    "use strict";
    angular
        .module("App")
        .service("authService",authService);

    authService.$inject = ['socketService','$state'];

    function authService(socketService,$state){
        var models = {
            login:"",
            password:""
        };

        var service = {
            models:models,
            sendAuthData:sendAuthData
        };
        return service;

        function sendAuthData(){
            var vm = this;
            socketService.sendAuthData(vm.models)
                .then(function(token){
                    localStorage.setItem("socket::token",token);
                    $state.go("container.home");
                })
                .catch();
        }
    }
})();

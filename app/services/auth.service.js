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
            var vm = this,
                login = vm.models.login,
                password = vm.models.password;
            
            socketService.sendAuthData({login:login,password:password})
                .then(function(token){
                    localStorage.setItem("socket::token",token);
                    $state.go("container.home");
                })
                .catch();
        }
    }
})();

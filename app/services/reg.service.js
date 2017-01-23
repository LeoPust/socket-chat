(function(){
    "use strict";
    angular
        .module("App")
        .service("regService",regService);

    regService.$inject = ['socketService','$state'];

    function regService(socketService,$state){
        var models = {
            login:"",
            password:"",
            email:"",
            first_name:"",
            last_name:""
        };

        var service = {
            models:models,
            sendRegData:sendRegData
        };
        return service;

        function sendRegData(){
            var vm = this,
                models = {
                    login:vm.models.login,
                    password:vm.models.password,
                    email:vm.models.email,
                    first_name:vm.models.first_name,
                    last_name:vm.models.last_name
                };
            socketService.sendRegData(models)
                .then(function(){
                    $state.go("auth");
                });
        }
    }
})();

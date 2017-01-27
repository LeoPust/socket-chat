(function(){
    "use strict";
    angular
        .module("App")
        .service("sideBarService",sideBarService);

    sideBarService.$inject = ['$state','$rootScope','socketService'];

    function sideBarService($state,$rootScope,socketService){
        var models = {
            users:[]
        },
            profile = {
                login:""
            };

        var service = {
            models:models,
            profile:profile,
            getProfile:getProfile,
            tokenValidate:tokenValidate
        };
        return service;

        function getProfile(){

        }

        function tokenValidate(){
            var vm = this;
            socketService.tokenValidate()
                .then(function(){
                    return socketService.getProfile();
                })
                .then(function(data){
                    vm.profile.login = data.login;
                    $rootScope.$apply();
                    return socketService.getUserList();
                })
                .then(function(data){
                    console.log(data);
                    vm.models.users = data;
                    $rootScope.$apply();
                })
                .catch(function(err){
                    console.log(err);
                    if(err.status == 401){
                        localStorage.clear();
                        $state.go("auth");
                    }
                });
        }
    }
})();

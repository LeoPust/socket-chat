(function(){
    "use strict";
    angular
        .module("App")
        .service("sideBarService",sideBarService);

    sideBarService.$inject = ['$state','socketService'];

    function sideBarService($state,socketService){
        var models = {};

        var service = {
            models:models,
            getProfile:getProfile,
            tokenValidate:tokenValidate
        };
        return service;

        function getProfile(){

        }

        function tokenValidate(){
            socketService.tokenValidate()
                .then(function(){
                    return socketService.getProfile();
                })
                .then(function(data){

                })
                .catch(function(){
                    localStorage.clear();
                    $state.go("auth");
                });
        }
    }
})();

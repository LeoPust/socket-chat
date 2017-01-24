(function(){
    "use strict";
    angular
        .module("App")
        .service("sideBarService",sideBarService);

    sideBarService.$inject = ['socketService'];

    function sideBarService(socketService){
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
            return socketService.tokenValidate();
        }
    }
})();

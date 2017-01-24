(function(){
    "use strict";
    angular
        .module("App")
        .run(Run);

    Run.$inject = ['$http','$state','sideBarService'];

    function Run($http,$state,sideBarService){
        $http.defaults.headers.post = {'Content-Type':'application/json'};
        if(localStorage.getItem("socket::token") === null){
            $state.go("auth");
        }else{
            sideBarService.tokenValidate()
                .then(function(){
                    sideBarService.getProfile();
                })
                .catch(function(){
                    localStorage.clear();
                    $state.go("auth");
                });
        }
    }
})();

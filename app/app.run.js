(function(){
    "use strict";
    angular
        .module("App")
        .run(Run);

    Run.$inject = ['$http','$state'];

    function Run($http,$state){
        $http.defaults.headers.post = {'Content-Type':'application/json'};
        if(localStorage.getItem("socket::token") === null) {
            $state.go('auth', null, {reload: true});
        }
    }
})();

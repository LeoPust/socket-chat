(function(){
    "use strict";
    angular
        .module("App")
        .config(Config);

    Config.$inject = ['$locationProvider','$urlRouterProvider','$stateProvider'];

    function Config($locationProvider,$urlRouterProvider,$stateProvider){
        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise('/404');

        $stateProvider
            .state("container",{
                url:"/",
                abstract:true
            })
            .state("container.home",{
                url:"",
                views:{
                    'sidebar':{},
                    'header':{},
                    'home':{}
                }
            })
            .state("authorization",{})
            .state("registration",{})
    }
})();

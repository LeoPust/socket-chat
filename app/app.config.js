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
            // .state("container.home",{
            //     url:"",
            //     views:{
            //         'sidebar':{
            //             templateUrl:"templates/components/sidebar.component.html"
            //         },
            //         'header':{
            //             templateUrl:"templates/components/sidebar.component.html"
            //         },
            //         'home':{
            //             templateUrl:"templates/components/sidebar.component.html"
            //         }
            //     }
            // })
            .state("auth",{
                url:"/authorization",
                controller:"AuthorizationController",
                controllerAs:"vm",
                templateUrl:"templates/pages/auth.page.html"

            });

    }
})();

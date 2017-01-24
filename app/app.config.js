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
                    'sidebar':{
                        controller:"SideBarController",
                        controllerAs:"vm",
                        templateUrl:"templates/components/sidebar.component.html"
                    },
                    'header':{
                        controller:"HeaderController",
                        controllerAs:"vm",
                        templateUrl:"templates/components/header.component.html"
                    },
                    'home':{
                        controller:"HomeController",
                        controllerAs:"vm",
                        templateUrl:"templates/pages/home.page.html"
                    }
                }
            })
            .state("auth",{
                url:"/authorization",
                controller:"AuthorizationController",
                controllerAs:"vm",
                templateUrl:"templates/pages/auth.page.html"

            })
            .state("registration",{
                url:"/registration",
                controller:"RegistrationController",
                controllerAs:"vm",
                templateUrl:"templates/pages/reg.page.html"
            });

    }
})();

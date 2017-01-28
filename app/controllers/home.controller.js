(function(){
    "use strict";
    angular
        .module("App")
        .controller("HomeController",HomeController);

    HomeController.$inject = ['homeService','socketListenersService'];

    function HomeController(homeService,socketListenersService){
        var vm = this;

        vm.rooms = homeService.rooms;

        activate();

        function activate(){
            socketListenersService.homeListeners();
        }

    }
})();

(function () {

    'use strict';

    angular
        .module('act-one-app')
        //.config(interceptors)
        .config(locations)
        .config(routes);

    interceptors.$inject = ['$httpProvider'];
    routes.$inject = ['$routeProvider'];
    locations.$inject = ['$locationProvider'];

    function interceptors ($httpProvider) {
        $httpProvider.interceptors.push('authInterceptor');
    }

    function locations ($locationProvider) {
        $locationProvider.html5Mode(true);
    }

    function routes ($routeProvider) {
      $routeProvider.
        when('/', {
          templateUrl: '/js/act-one/home/home.html',
          controller: 'HomeCtrl',
          activeNav: 'home'
        }).
        when('/about', {
          templateUrl: '/js/act-one/about/about.html',
          controller: 'AboutCtrl',
          activeNav: 'about'
        }).
        when('/auction', {
          templateUrl: '/js/act-one/auction/auction.html',
          controller: 'AuctionCtrl',
          activeNav: 'auction'
        }).
        when('/tickets', {
          templateUrl: '/js/act-one/tickets/tickets.html',
          controller: 'TicketsCtrl',
          activeNav: 'tickets'
        }).
        otherwise({
          redirectTo: '/'
        });
    }

})();

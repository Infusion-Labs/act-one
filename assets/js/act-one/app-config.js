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
          controller: 'HomeCtrl'
        }).
        when('/about', {
          templateUrl: '/js/act-one/about/about.html',
          controller: 'AboutCtrl'
        }).
        when('/auction', {
          templateUrl: '/js/act-one/auction/auction.html',
          controller: 'AuctionCtrl'
        }).
        when('/designers', {
          templateUrl: '/js/act-one/fundraiser/designers.html',
          controller: 'DesignersCtrl'
        }).
        when('/tickets', {
          templateUrl: '/js/act-one/tickets/tickets.html',
          controller: 'TicketsCtrl'
        }).
        otherwise({
          redirectTo: '/'
        });
    }

})();

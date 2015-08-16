(function () {

    'use strict';

    angular
        .module('act-one-app')
        .config(routes);

    routes.$inject = ['$routeProvider'];

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
        when('/login', {
          templateUrl: '/js/act-one/home/login.html',
          controller: 'LoginCtrl'
        }).
        when('/tickets', {
          templateUrl: '/js/act-one/tickets/tickets.html',
          controller: 'TicketsCtrl',
          access: {
              requiresLogin: true,
          }
        }).
        when('/403', {
          templateUrl: '/js/act-one/home/403.html'
        }).
        otherwise({
          templateUrl: '/js/act-one/home/404.html'
        });
    }

})();

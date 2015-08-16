(function () {

    'use strict';

    angular
      .module('act-one-app')
      //.config(interceptors)
      .config(locations)
      //.run(firewall)
    ;

    interceptors.$inject = ['$httpProvider'];
    locations.$inject = ['$locationProvider'];
    firewall.$inject = ['$rootScope', '$location', 'authorization'];

    function interceptors ($httpProvider) {
        $httpProvider.interceptors.push('authInterceptor');
    }

    function locations ($locationProvider) {
        $locationProvider.html5Mode(true);
    }

    function firewall ($rootScope, $location, authorization) {

      $rootScope.$on('$routeChangeStart', function (event, next) {
        var authStatus;
        if (next.access !== undefined) {
          authStatus = authorization.authorize(next.access);
          if (authStatus.loginRequired) {
              $location.path('/login');
          } else if (authStatus.notAuthorised) {
              $location.path('/403').replace();
          }
        }
      });

    }

})();

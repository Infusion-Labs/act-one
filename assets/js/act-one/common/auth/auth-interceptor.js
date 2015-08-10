// (function () {
//
//     'use strict';
//
//     angular
//         .module('act-one-app')
//         .factory('authInterceptor', authInterceptor);
//
//     authInterceptor.$inject = ['$q', '$injector', 'tokenManager', 'alert', 'identity'];
//
//     function authInterceptor ($q, $injector, tokenManager, alert, identity) {
//
//         return {
//             request: function (config) {
//                 config = tokenManager.attachToken(config);
//                 return config
//             },
//
//             responseError: function(rejection) {
//
//                 if (rejection.status === 401) {
//                     alert.error('Your login has expired.')
//                     tokenManager.clearToken();
//                     identity.user = null;
//                     identity.isAuthenticated = false;
//                     $injector.get('$state').go('login');
//                 } else if (rejection.status === 403) {
//                     alert.error('You are not authorized to access this resource.');
//                     tokenManager.clearToken();
//                     identity.user = null;
//                     identity.isAuthenticated = null;
//                     $injector.get('$state').go('login');
//                 } else if (rejection.status === 404) {
//                     $injector.get('$state').go('404');
//                 }
//
//                 return $q.reject(rejection);
//             }
//
//         };
//     }
//
// })();

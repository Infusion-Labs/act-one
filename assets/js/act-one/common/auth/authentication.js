(function () {

  'use strict';

  angular
    .module('act-one-app')
    .factory('authentication', authentication);

    authentication.$inject = ['$q', 'eventBus'];

    function authentication ($q, eventBus) {

      var currentUser;

      return {
        login: login,
        logout: logout,
        getCurrentUser: getCurrentUser
      };

      function createUser (name, permissions, token) {
        return {
          name: name,
          permissions: permissions,
          token: token
        };
      }

      function login (email, password) {
        //TODO: log in, retrieve and store jwt
      }

      function logout () {
        this.currentUser = undefined;
        eventBus.broadcast(jcs.modules.auth.events.userLoggedOut);
      }

      function getCurrentUser () {
        return this.currentUser;
      }

    }

})();

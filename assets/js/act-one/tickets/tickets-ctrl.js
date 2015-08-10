(function () {

  'use strict';

  angular
    .module('act-one-app')
    .controller('TicketsCtrl', TicketsCtrl);

    TicketsCtrl.$inject = ['$scope'];

    function TicketsCtrl ($scope) {

      $scope.guestButtonText = 'Add a Guest';
      $scope.attendee = {
        ticket: 0,
        guests: []
      };

      $scope.addGuest = function () {
        $scope.attendee.guests.push({
          ticket: 0
        });
        $scope.guestButtonText = 'Add Another Guest';
      };

      $scope.removeGuest = function (guest) {
        var index = $scope.attendee.guests.indexOf(guest);
        if (index > -1) {
          $scope.attendee.guests.splice(index, 1);
        }
      };

      $scope.checkout = function () {
        console.log($scope.attendee);
      }

    }

})();

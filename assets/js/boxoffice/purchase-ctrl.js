(function () {

  'use strict';

  angular
    .module('box-office-app')
    .controller('PurchaseCtrl', PurchaseCtrl);

    PurchaseCtrl.$inject = ['$scope'];

    function PurchaseCtrl ($scope) {

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

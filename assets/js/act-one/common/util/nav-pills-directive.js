(function () {

  'use strict';

  angular
    .module('act-one-app')
    .directive('navPills', navPills);

    navPills.$inject = ['$location'];

    function navPills (location) {
      return {
        restrict: 'A',
        link: function(scope, element) {
          var $ul = $(element);
          $ul.addClass("nav nav-pills");

          var $tabs = $ul.children();
          var tabMap = {};
          $tabs.each(function() {
            var $li = $(this);
            //Substring 1 to remove the # at the beginning (because location.path() below does not return the #)
            tabMap[$li.find('a').attr('href')] = $li;
          });

          scope.location = location;
          scope.$watch('location.path()', function(newPath) {
            $tabs.removeClass("active");
            tabMap[newPath].addClass("active");
          });
        }
      };
    }

})();

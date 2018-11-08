(function () {
  'use strict';
  angular.module('tourTest.app')
    .controller('appController', ['$scope', '$state', 'uiTourService',
      function ($scope, $state, uiTourService) {
        var testTour = uiTourService.getTourByName('testTour');
        $scope.toggleTour = function () {
          $scope.showTestTour = true;
          $scope.onTourReady();
        }
        $scope.onTourReady = function () {
          if ($scope.showTestTour === true) {
            $scope.showTestTour = false;
            testTour.start();
          }
          return true;
        };
        $scope.goToPagePage11 = function (params) {
          testTour.end().then(function () {
            return $state.go('main.home.page1.page11');
          }).then(function () {
            return testTour.startAt('page1Step1');
          });
        }
      }
    ])
})();
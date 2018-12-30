(function () {
  'use strict';
  angular.module('tourTest.app')
    .controller('appController', ['$scope', '$state', '$http', '$sce',
      function ($scope, $state, $http, $sce) {
        // var testTour = uiTourService.getTourByName('testTour');
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
        // $.ajaxSetup({
        //   beforeSend: function (xhr, settings) {
        //     if (settings.type == 'POST' || settings.type == 'PUT' ||
        //       settings.type == 'DELETE') {
        //       if (!(/^http:.*/.test(settings.url) || /^https:.*/
        //           .test(settings.url))) {
        //         // Only send the token to relative URLs i.e. locally.
        //         xhr.setRequestHeader("X-XSRF-TOKEN", Cookies
        //           .get('XSRF-TOKEN'));
        //       }
        //     }
        //   }
        // });
        // $sceDelegateProvider.resourceUrlWhitelist([
        //   // Allow same origin resource loads.
        //   'self',
        //   // Allow loading from our assets domain.  Notice the difference between * and **.
        //   'http://192.168.0.3:7003/**'
        // ]);
        var url = $sce.trustAsResourceUrl('http://192.168.0.3:7003/login/google');
        console.log(url);
        $scope.login = function () {
          window.location = 'http://192.168.0.3:7003/login/google';
          // loginService.get({
          //     // 'redirect_uri': 'http://localhost:7003/login/google'
          //   })
          //   .$promise.then(function (response) {
          //     console.log(loginService);
          //   }).catch(function (error) {
          //     console.log(error);
          //   });

          // $http({
          //   url: url,
          //   method: 'GET',
          //   data: false,
          //   headers: {
          //     'Access-Control-Allow-Origin': '*'
          //   }
          // }).then(function (data) {
          //   console.log(data);
          // });
          // var logout = function () {
          //   $.post("/logout", function () {
          //     $("#user").html('');
          //     $(".unauthenticated").show();
          //     $(".authenticated").hide();
          //   })
          //   return true;
          // }
        }
      }
    ])
})();
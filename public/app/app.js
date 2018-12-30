(function () {
  'use strict';
  angular.module('tourTest', ['ui.router', 'ngResource', 'ngSanitize', 'bm.uiTour', 'tourTest.app'])
    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', 'TourConfigProvider', '$sceDelegateProvider',
      function ($stateProvider, $urlRouterProvider, $locationProvider, TourConfigProvider, $sceDelegateProvider) {
        $stateProvider
          .state('main', {
            url: '/main',
            abstract: true,
            cache: false,
            template: '<div ui-view="mainContent"></div>',
          });
        $sceDelegateProvider.resourceUrlWhitelist(['self', 'http://192.168.0.3:7003/**', 'http://192.168.0.3:7003/login/google'])
        // if none of the states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/main/home');
        // html5Mode removes #! from url and make the url pretty(normal)
        $locationProvider.html5Mode(true);
      }
    ])
    .run(['uiTourService', function (uiTourService) {
      uiTourService.createDetachedTour('testTour', {
        backdrop: true
      });
    }]);
})();
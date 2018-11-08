(function () {
  'use strict';
  angular.module('tourTest.app', [])
    .config(['$stateProvider', function ($stateProvider) {
      $stateProvider
        .state('main.home', {
          'url': '/home',
          'views': {
            'mainContent': {
              'templateUrl': '/public/app/views/home.html',
              // 'controller': 'dashboardCtrl'
            }
          }
        })
        .state('main.home.page1', {
          'url': '/page1',
          'views': {
            'appContent': {
              template: '<div ui-view="pageContent"></div>'
              // 'controller': 'dashboardCtrl'
            }
          }
        })
        .state('main.home.page1.page11', {
          'url': '/page1-1',
          'views': {
            'pageContent': {
              'templateUrl': '/public/app/views/page1-1.html',
              // 'controller': 'dashboardCtrl'
            }
          }
        })
        .state('main.home.page1.page12', {
          'url': '/page1-2',
          'views': {
            'pageContent': {
              'templateUrl': '/public/app/views/page1-2.html',
              // 'controller': 'dashboardCtrl'
            }
          }
        })
        .state('main.home.page2', {
          'url': '/page2',
          'views': {
            'appContent': {
              'templateUrl': '/public/app/views/page2.html',
              // 'controller': 'dashboardCtrl'
            }
          }
        });

    }]);
})();
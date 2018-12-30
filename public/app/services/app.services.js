(function () {
  'use strict';
  angular.module('tourTest.app')
    .factory('loginService', ['$resource', function ($resource) {


      return $resource('http://192.168.0.3:7003', {}, {
        get: {
          method: 'GET',
          data: false,
          headers: {
            'Access-Control-Allow-Origin': '*'
          }
        }
      });


      // return $resource('http://192.168.0.3:7003/login/google');
    }]);
})();
'use strict';

angular.module('web', [
      'ngCookies',
      'ngResource',
      'ngSanitize',
      'ui.bootstrap',
      'ui.jq', 'ui.event'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });


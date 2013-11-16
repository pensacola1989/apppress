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
        .when('/app/list', {
        templateUrl: 'views/app/list.html',
        controller: 'AppListCtrl'
        })
        .when('/app/view/:appId', {
            templateUrl: 'views/app/detail.html',
            controller: 'AppDetailCtrl'
        })
        .when('/app/edit/:appId', {
            templateUrl: 'views/app/edit.html',
            controller: 'AppEditCtrl'
        })
        .otherwise({
            redirectTo: '/app/list'
        });
  });


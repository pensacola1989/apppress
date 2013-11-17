'use strict';

var adminApp = angular.module('adminApp', [
      'ngCookies', 'ngResource', 'ngSanitize',
      'ui.bootstrap', 'ui.jq', 'ui.event',
      'adminConstants', 'adminServices', 'adminControllers'
  ])

  .config(function ($routeProvider) {
    $routeProvider
        .when('/signon', {
            templateUrl: 'views/user/signon.html',
            controller: 'UserCtrl'
        })
        .when('/signup', {
            templateUrl: 'views/user/signup.html',
            controller: 'UserCtrl'
        })
        .when('/app/list', {
            templateUrl: 'views/app/list.html',
            controller: 'AppListCtrl',
            resolve: {
                factory: 'userAuth'
            }
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
  })

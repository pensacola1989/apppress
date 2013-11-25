'use strict';

var adminApp = angular.module('adminApp', [
      'ngRoute', 'ngCookies', 'ngResource', 'ngSanitize',
      'ui.bootstrap', 'ui.jq', 'ui.event',
      'adminConstants', 'adminModels', 'adminDirectives', 'adminServices', 'adminControllers'
  ])
  .config(function ($routeProvider, $httpProvider) {
    $routeProvider
        .when('/tokenAuth', {
            templateUrl: 'views/index.html',
            controller: 'IndexCtrl',
            resolve: {
                factory: 'tokenAuthService'
            }
        })
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
            controller: 'AppListCtrl'
        })
        .when('/app/edit/:appId', {
            templateUrl: 'views/app/edit.html',
            controller: 'AppEditCtrl'
        })
        .when('/cms/:appId', {
            templateUrl: 'views/cms/main.html',
            controller: 'CmsCtrl'
        })
        .otherwise({
            redirectTo: '/tokenAuth'
        });

        $httpProvider.interceptors.push([ '$q', '$location', function($q, $location) {
            return {
                'request': function(config) {
                    return config || $q.when(config);
                },
                'requestError': function(rejection) {
                    return $q.reject(rejection);
                },
                'response': function(response) {
                    return response || $q.when(response);
                },
                'responseError': function(rejection) {
                    if (rejection.status == '555') {
                        console.log('server return "555"');
                        $location.path("/signon");
                    }
                    return $q.reject(rejection);
                }
            }
        }]);
  })

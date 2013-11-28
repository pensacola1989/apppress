'use strict';
var adminControllers = angular.module('adminControllers');

adminControllers
    .controller('CmsStoreCtrl', ['$rootScope', '$scope', '$routeParams',
            'Subscription', function ($rootScope, $scope, $routeParams, Subscription) {

        console.log($rootScope.CurrentSub);
    }]);





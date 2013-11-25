'use strict';
var adminControllers = angular.module('adminControllers');

adminControllers
    .controller('CmsPreferenceCtrl', ['$rootScope', '$scope', '$routeParams',
            'Subscription', function ($rootScope, $scope, $routeParams, Subscription) {

        console.log($rootScope.CurrentSub);
    }]);





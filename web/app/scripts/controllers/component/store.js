'use strict';
var adminControllers = angular.module('adminControllers');

adminControllers
    .controller('CmsStoreCtrl', ['$rootScope', '$scope', '$routeParams',
            'Store', function ($rootScope, $scope, $routeParams, Store) {

        console.log($rootScope.CurrentSub);
        var json = Store.queryBySub({subId: $rootScope.CurrentSub.id},function() {
            $scope.store = json.data;
        });
    }]);





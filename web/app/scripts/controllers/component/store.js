'use strict';
var adminControllers = angular.module('adminControllers');

adminControllers
    .controller('CmsStoreCtrl', ['$rootScope', '$scope', '$routeParams',
            'Store', function ($rootScope, $scope, $routeParams, Store) {


        var json = Store.getStoreBySubId({subId: $rootScope.CurrentSub.id},function() {
            $scope.store = json.data.store;
            $scope.categories = json.data.categories;
            console.log(json);
        });
    }]);





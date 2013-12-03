'use strict';
var adminControllers = angular.module('adminControllers');

adminControllers
    .controller('CmsStoreCtrl', ['$rootScope', '$scope', '$routeParams', 'uploadService',
            'Store', 'Category', function ($rootScope, $scope, $routeParams, uploadService, Store, Category) {

         refreshCatagoryList();

        $scope.createCategory = function() {
            uploadService.maxNumb = 3;
            $scope.storeContent = 'views/component/store/category-edit.html';
            $scope.category = new Category({store: $scope.store.id});
        };

        $scope.saveCategory = function() {
            console.log(uploadService);
            $scope.category.$save().then(function() {
                refreshCatagoryList();
            });
        };

        function refreshCatagoryList() {
            $scope.storeContent = 'views/component/store/category-list.html';
            var json = Store.getStoreBySubId({subId: $rootScope.CurrentSub.id},function() {
                $scope.store = json.data.store;
                $scope.categories = json.data.categories;
            });
        }
    }]);







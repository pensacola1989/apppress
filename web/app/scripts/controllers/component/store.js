'use strict';
var adminControllers = angular.module('adminControllers');

adminControllers
    .controller('CmsStoreCtrl', ['$rootScope', '$scope', '$routeParams', 'StringUtil', 'uploadService',
            'Store', 'Category', function ($rootScope, $scope, $routeParams, StringUtil, uploadService, Store, Category) {

         uploadService.maxNumb = 1;
         refreshCatagoryList();

        $scope.createCategory = function() {
            uploadService.disabled = false;
            uploadService.files = [];
            $scope.storeContent = 'views/component/store/category-edit.html';
            $scope.category = new Category({store: $scope.store.id});
        };

        $scope.saveCategory = function() {
            $scope.category.picture = uploadService.files[0].url
            $scope.category.$save().then(function() {
                refreshCatagoryList();
            });
        };

        $scope.noImage = function() {
            if (uploadService.files.length < 1) {
                return true;
            } else {
                return false;
            }
        };

        $scope.editCategory = function(cate) {
            uploadService.files = [];
            $scope.storeContent = 'views/component/store/category-edit.html';
            $scope.category = new Category(cate);

            uploadService.disabled = true;
            uploadService.files.push({url: cate.picture, thumbnailUrl: uploadService.pictureUrl(cate.picture, 'thumbnail')});
            $scope.files = uploadService.files;

        };

        $scope.deleteCategory = function(cate) {
            new Category(cate).$delete().then(function() {
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







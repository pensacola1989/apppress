'use strict';

var adminModels = angular.module('adminModels');

adminModels.factory('Store', ['$resource', 'Constant',
    function($resource, Constant){
        return $resource(Constant.ApiPath + 'storeBySubId', {}, {
            getStoreBySubId: {method:'GET', subId: true}
        });
    }
]);

adminModels.factory('Category', ['$resource', 'Constant',
    function($resource, Constant){
        return $resource(Constant.ApiPath + 'category/:categoryId', {categoryId:'@id'}, {

        });
    }
]);

adminModels.factory('Product', ['$resource', 'Constant',
    function($resource, Constant){
        return $resource(Constant.ApiPath + 'product/:productId', {productId:'@id'}, {

        });
    }
]);

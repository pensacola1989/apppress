'use strict';

var adminModels = angular.module('adminModels');

adminModels.factory('Store', ['$resource', 'Constant',
    function($resource, Constant){
        return $resource(Constant.ApiPath + 'store/:storeId', {storeId:'@id'}, {
            queryBySub: {method:'GET', subId: true}
        });
    }
]);

adminModels.factory('Category', ['$resource', 'Constant',
    function($resource, Constant){
        return $resource(Constant.ApiPath + 'category/:categoryId', {subId:'@id'}, {

        });
    }
]);

adminModels.factory('Product', ['$resource', 'Constant',
    function($resource, Constant){
        return $resource(Constant.ApiPath + 'product/:productId', {subId:'@id'}, {

        });
    }
]);

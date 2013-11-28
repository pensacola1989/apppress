'use strict';

var adminModels = angular.module('adminModels');

adminModels.factory('Subscription', ['$resource', 'Constant',
    function($resource, Constant){
        return $resource(Constant.ApiPath + 'subscription/:subId', {subId:'@id'}, {
            query: {method:'GET', isArray:false}
        });
    }
]);

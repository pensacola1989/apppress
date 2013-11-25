'use strict';

var adminModels = angular.module('adminModels');

adminModels.factory('Subscription', ['$resource', 'Constant',
    function($resource, Constant){
        return $resource(Constant.ApiPath + 'subscriptions/:subId', {subId:'@id'}, {
            query: {method:'GET', params:{}},
            detail: {method:'GET', params:{subId:'subId'}}
        });
    }
]);

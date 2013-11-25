'use strict';

var adminModels = angular.module('adminModels');

adminModels.factory('App', ['$resource', 'Constant',
    function($resource, Constant){
        return $resource(Constant.ApiPath + 'apps/:appId', {appId:'@id'}, {
            query: {method:'GET', params:{}},
            detail: {method:'GET', params:{appId:'appId'}}
        });
    }
]);






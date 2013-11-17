'use strict';

var adminServices = angular.module('adminServices');

adminServices.factory('App', ['$resource', 'Constant',
    function($resource, Constant){
        return $resource(Constant.ApiPath + 'apps/:appId', {appId:'@id'}, {
            query: {method:'GET', params:{}},
            detail: {method:'GET', params:{appId:'apps'}, isArray:false}
        });
    }
]);




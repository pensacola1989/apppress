'use strict';

var adminModels = angular.module('adminModels');

adminModels.factory('App', ['$resource', 'Constant',
    function($resource, Constant){
        return $resource(Constant.ApiPath + 'app/:appId', {appId:'@id'}, {
            query: {method:'GET', isArray:false}
        });
    }
]);






'use strict';

var adminServices = angular.module('adminServices');

adminServices.factory('uploadService', [function(){
    return {
        files : []
    };
}]);

'use strict';

var adminServices = angular.module('adminServices');

adminServices.factory('StringUtil', [function(){
    return {
        isEmpty: function (o){
            if (o === null || o === "null" || o === undefined || o === "undefined" || o === "") {
                return true;
            } else {
                return false;
            }
        }
    }
}]);

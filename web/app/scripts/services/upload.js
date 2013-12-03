'use strict';

var adminServices = angular.module('adminServices');

adminServices.factory('uploadService', ['StringUtil', function(StringUtil){
    return {
        maxNumb: 0,
        files : [],
        pictureUrl: function(url, version) {
            if (StringUtil.isEmpty(url)) return undefined;
            var idx = url.lastIndexOf('/');
            var ret = url.substring(0, idx + 1) + version + url.substring(idx);
            return ret;
        }
    };
}]);

var adminApp = angular.module('adminApp');

adminApp.filter('imgPath', ['Constant', 'StringUtil', function(Constant, StringUtil) {
    return function(url, external) {
        if (StringUtil.isEmpty(url)) {
            return undefined;
        }
        if (StringUtil.isEmpty(external))  external = true;
        if (url.indexOf('/files') >= 0)  {
            external = true;
        } else {
            external = false;
        }

        if (external) {
            url = Constant.UploadUrl + url;
        }
        return url;
    }
}]);
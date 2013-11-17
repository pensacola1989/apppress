var adminConstants = angular.module('adminConstants', []);

adminConstants.factory('Constant', ['$location', function($location) {
    var SERVICE_URL_DEVELOP  = "http://192.168.1.228/";
    var SERVICE_URL_PRODUCTION  = "http://56.io/";

    var ApiVer = 'v1';
    var ApiPath = 'N/A';
    var WebRoot = 'N/A';

    var url = $location.absUrl();
    if (url.indexOf("192.168") > -1) {
        ApiPath =  SERVICE_URL_DEVELOP + 'api/' + ApiVer + '/';
        if (url.indexOf("dist") > -1) {   // build testing
            WebRoot = SERVICE_URL_DEVELOP + 'dist/';
        } else {    // develop
            WebRoot = SERVICE_URL_DEVELOP + 'app/';
        }
    } else {    // production
        ApiPath =  SERVICE_URL_PRODUCTION + 'api/' + ApiVer + '/';
        WebRoot = SERVICE_URL_PRODUCTION;
    }

    return {
        ApiVer: ApiVer,
        ApiPath: ApiPath,
        WebRoot: WebRoot
    };
}]);
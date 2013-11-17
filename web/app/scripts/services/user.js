'use strict';

var adminServices = angular.module('adminServices');

adminServices.factory('userService', ['$http', 'Constant', function($http, Constant){
    return {
        signonWithToken:function(token){
            return $http.post(Constant.ApiPath + 'user/signonWithToken', token);
        },
        signon:function(user){
            return $http.post(Constant.ApiPath + 'user/signon', user);
        },
        signup:function(user){
            return $http.post(Constant.ApiPath + 'user/signup', user);
        }
    }
}]);

adminServices.factory('userAuth', ['$rootScope', '$cookies', '$q', '$http', '$location', 'Constant', 'StringUtil', 'userService',
                                        function($rootScope, $cookies, $q, $http, $location, Constant, StringUtil, userService){
    if ($rootScope.userProfile) {
        return true;
    } else {
        var defered = $q.defer();
        var userToken = $cookies.userToken;

        if (!StringUtil.isEmpty(userToken)) {
            userService.signonWithToken({token: userToken})
                .success(function (json) {
                    console.log(json);
                    if (json.code === 1) {
                        $rootScope.userProfile = json.data;
                        defered.resolve(true);
                    } else {
                        defered.reject();
                        $location.path("/signon");
                    }
                })
                .error(function () {
                    defered.reject();
                    $location.path("/signon");
                });
        } else {
            $location.path("/signon");
        }
        return defered.promise;
    }
}]);





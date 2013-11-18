'use strict';

var adminServices = angular.module('adminServices');

adminServices.factory('userService', ['$http', 'Constant', function($http, Constant){
    return {
        signonWithToken:function(user){
            return $http.post(Constant.ApiPath + 'user/signonWithToken', user);
        },
        signon:function(user){
            return $http.post(Constant.ApiPath + 'user/signon', user);
        },
        signup:function(user){
            return $http.post(Constant.ApiPath + 'user/signup', user);
        },
        signout:function(){
            return $http.post(Constant.ApiPath + 'user/signout');
        }
    }
}]);

adminServices.factory('tokenAuthService', ['$rootScope', '$cookies', '$q', '$http', '$location', 'Constant', 'StringUtil',
                                        function($rootScope, $cookies, $q, $http, $location, Constant, StringUtil){
    if ($rootScope.userProfile) {
        return true;
    } else {
        var defered = $q.defer();
        var userToken = $cookies.userToken;
        if (!StringUtil.isEmpty(userToken)) {
            $http.post(Constant.ApiPath + 'user/signonWithToken', { token: userToken })
                .success(function (json) {
                    if (json.code === 1) {
                        $rootScope.userProfile = json.data;
                        defered.resolve(true);
                        $location.path("/app/list");
                    } else {
                        defered.reject();
                        $location.path("/signon");
                    }
                })
                .error(function () {
                    defered.reject();
                    $location.path("/signon");
                });
        }
        defered.reject();
        $location.path("/signon");
        return defered.promise;
    }
}]);





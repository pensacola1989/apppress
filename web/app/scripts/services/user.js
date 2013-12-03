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

     return function () {
        if ($rootScope.userProfile) {
            $location.path("/app/list");
        } else {
            var userToken = $cookies.userToken;

            if (!StringUtil.isEmpty(userToken)) {
                $http.post(Constant.ApiPath + 'user/signonWithToken', { token: userToken })
                    .success(function (json) {
                        if (json.code === 1) {
                            $rootScope.userProfile = json.data;
                            $location.path("/app/list");
                        } else {
                            $location.path("/signon");
                        }
                    })
                    .error(function () {
                        $location.path("/signon");
                    });
            } else {
                $location.path("/signon");
            }
        }
     }
}]);





'use strict';
var adminControllers = angular.module('adminControllers');

adminControllers
    .controller('CmsCtrl', ['$rootScope', '$scope', '$routeParams', '$timeout', 'Subscription',
                    function ($rootScope, $scope, $routeParams, $timeout, Subscription) {
        $rootScope.CurrentAppId = $routeParams.appId;

        $scope.showSub = function () {
            // $('#previewFrame').attr('src', Constant.ClientRoot+ '?preview=true' + '#/app/' + appId);

            $timeout(function() {
                $scope.content = 'views/component/' + $rootScope.CurrentSub.code + '/main.html';
            }, 1);
        }
    }]);





'use strict';
var adminControllers = angular.module('adminControllers');

adminControllers
    .controller('CmsCtrl', ['$rootScope', '$scope', '$routeParams', 'Subscription',
                    function ($rootScope, $scope, $routeParams, Subscription) {
        $rootScope.CurrentAppId = $routeParams.appId;

        $scope.showSub = function () {
            // $('#previewFrame').attr('src', Constant.ClientRoot+ '?preview=true' + '#/app/' + appId);

            Subscription.get({subId:  $rootScope.CurrentSub.id}, function(json) {
                $scope.content = 'views/module/' + $rootScope.CurrentSub.code + '/index.html';
            });
        }
    }]);





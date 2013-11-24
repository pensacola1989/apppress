'use strict';
var adminApp = angular.module('adminApp');

adminApp.directive('cmsModuleMenu', ['App', function(App) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            scope.$watch('CurrentAppId', function (newVal, oldVal) {
                if (newVal) {
                    App.get({appId:  newVal}, function(json) {
                        console.log(json.data.subs);
                        $.createJCarousel(json.data.subs);
                    });
                }
            });
        }
    };
}]);

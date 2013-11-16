'use strict';

angular.module('web')
    .controller('AppListCtrl', function ($scope, $location) {
        $scope.create = function(){
            var url = '/app/edit/:111';
            $location.path(url);
        }
    })
    .controller('AppDetailCtrl', function ($scope) {

    })
    .controller('AppEditCtrl', function ($scope) {

    });


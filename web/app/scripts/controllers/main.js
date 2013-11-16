'use strict';

angular.module('web')
    .controller('HeaderCtrl', function ($scope) {
        $scope.email = 'aaronchen2k@gmail.com'
    })
    .controller('MainCtrl', function ($scope) {

    }).controller('CmsMenuCtrl', function ($scope) {
        $scope.myInterval = 1000;
        $scope.slides = $scope.slides = [];
        for (var i = 0; i < 6; i += 5) {
            var page = [];
            for (var j = 0; j<5; j++) {
                var index  = i + j;

                page.push({
                    id: index,
                    image: 'http://placekitten.com/' + index + '/200',
                    status: index > 5? 0: 1,
                    showMove: false
                });
            }
            $scope.slides.push(page);
        }

        $scope.active = function(item) {
            angular.forEach( $scope.slides, function(page, key){
                angular.forEach( page, function(item, key){
                    item.active = false;
                });
            });
            item.active = true;
        }
        $scope.onMouseOver = function(item) {
            item.showMove = true;
        }
        $scope.onMouseOut = function(item) {
            item.showMove = false;
        }

    });



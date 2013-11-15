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
                    enabled: index > 5? false: true,
                    showMove: false
                });
            }
            $scope.slides.push(page);
        }

        $scope.showClass = function(item) {
            if(item.enabled) return "";
            else return "disabled";
        }
        $scope.showMove = function(item) {
            console.log($scope.overId === item.id);
            return  $scope.overId === item.id;
        }
        $scope.mouseOver = function(item) {
//            angular.forEach($scope.slides, function(v, k){
//                angular.forEach(v, function(item, key){
//                    item.showMove = false;
//                });
//            });
            item.showMove = true;
        }

        $scope.mouseOut = function(item) {
            item.showMove = false;
        }

    });


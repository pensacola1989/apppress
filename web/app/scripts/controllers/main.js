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
                    image: 'http://placekitten.com/' + index + '/200',
                    enabled: index > 5? false: true
                });
            }
            $scope.slides.push(page);;
        }

        $scope.showClass = function(item) {
            console.log(item);
            if(item.enabled) return "";
            else return "disabled";
        }
    });


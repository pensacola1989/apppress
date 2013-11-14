'use strict';

angular.module('web', [
      'ngCookies',
      'ngResource',
      'ngSanitize',
      'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

function CarouselDemoCtrl($scope) {
    $scope.myInterval = 1000;
    var slides = $scope.slides = [];
    $scope.addSlide = function(i) {
        var page = [];
        for (var j = 0; j<5; j++) {
            page.push({
                image: 'http://placekitten.com/' + i + j + '/200'
            });
        }
        slides.push(page);
    };
    for (var i=0; i<12; i+=5) {
        $scope.addSlide(i);
    }
}


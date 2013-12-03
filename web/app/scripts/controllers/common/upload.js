'use strict';
var adminControllers = angular.module('adminControllers');

adminControllers
    .controller('FileUploadController', ['$scope', '$element', '$attrs', '$window', '$http', 'uploadService', 'Constant',
        function ($scope, $element, $attrs, $window, $http, uploadService, Constant) {
            $scope.disabled = false;
            $scope.files = $scope.files || [];

            $('#fileupload').fileupload({
                url: Constant.UploadUrl,
                dataType: 'json',
                done: function (e, data) {
                    //console.log(data.result.files);
                    $scope.$apply(function() {
                        for (var i = 0; i < data.result.files.length; i++) {
                            var file = data.result.files[i];
                            uploadService.files.push(file);
                        }
                        $scope.files = uploadService.files;

                        if ($scope.files.length >= uploadService.maxNumb) {
                            $scope.disabled = true;
                        }
                    });
                },
                send: function (e, data) {
                    console.log(data.files.length);
                    if (data.total > 10000000) {
                        alertify.alert('<span class="my-error">File size must be less than 10M.</span>');
                        return false;
                    }
                    return true;
                }
            });

            $scope.remove = function(file) {
                $http.delete(file.url).success(function() {
                    for (var i = 0; i < uploadService.files.length; i++) {
                        if (uploadService.files[i].url === file.url)  {
                            uploadService.files.splice(i,1);
                        };
                    }
                    $scope.files = uploadService.files;
                    if ($scope.files.length < uploadService.maxNumb) {
                        $scope.disabled = false;
                    }
                });
            };

            $scope.hover = function(file) {
                return file.showRemove = ! file.showRemove;
            };
    }]);







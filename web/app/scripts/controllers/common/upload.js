'use strict';
var adminControllers = angular.module('adminControllers');

adminControllers
    .controller('FileUploadController', ['$scope', '$element', '$attrs', '$window', 'Constant',
        function ($scope, $element, $attrs, $window, Constant) {
            $scope.disabled = false;
            $scope.files = $scope.files || [];

            $('#fileupload').fileupload({
                url: Constant.UploadUrl,
                dataType: 'json',
                done: function (e, data) {
                    $scope.$apply(function() {
                        for (var i = 0; i < data.result.files.length; i++) {
                            var file = data.result.files[i];
                            $scope.files.push(file);
                        }
                    });
                },
                send: function (e, data) {
                    if (data.total > 10000000) {
                        alertify.alert('<span class="my-error">File size must be less than 10M.</span>');
                        return false;
                    }
                    return true;
                }
            });
//            $(".fileinput-preview").delegate('.picture-container', 'mouseover', function(e){
//                $(this).find('.remove').css("display", "block");
//            });
//            $(".fileinput-preview").delegate('.picture-container','mouseout',function(e){
//                $(this).find('.remove').css("display", "none");
//            });
//
//            $(".fileinput-preview").delegate('.picture-container .remove', 'click', function(e){
//                me.get('context').set('picture', '');
//                $(this).parent('.picture-container').remove();
//            });
    }]);







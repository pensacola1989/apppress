'use strict';
var adminApp = angular.module('adminApp');

adminApp.directive('cmsModuleMenu', ['$rootScope', 'Constant', 'App',  'cmsService', function($rootScope, Constant, App, cmsService) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            scope.$watch('CurrentAppId', function (newVal, oldVal) {
                if (newVal) {
                    App.get({appId:  newVal}, function(json) {
                        var items = json.data.subs;
                        console.log(items);
                        $('#cms-menu').jcarousel({
                            size: items.length,
                            scroll: 5,
                            visible: 5,
                            itemLoadCallback: function (carousel, state) {
                                for (var i = carousel.first; i <= carousel.last; i++) {
                                    if (carousel.has(i)) {
                                        continue;
                                    }

                                    if (i > items.length) {
                                        break;
                                    }
                                    var cls = items[i-1].status===0? 'forbidden':'';
                                    carousel.add(i,
                                        [
                                            '<li id="jcarousel-item-' + items[i-1].id + '-' + (i-1) + '" class="' + cls + '">',
                                            '<div class="jcarousel-item-container">',
                                            '<div><img src="img/icons-plugin-white/album.png" height=30 width=30></div>',
                                            '<div>' + items[i-1].name + '</div>',
                                            '</div>',
                                            '<div class="jcarousel-item-move"></div>',
                                            '</li>'
                                        ].join('')
                                    );
                                }
                                carousel.size(items.length);
                            }
                        });
                        $(".jcarousel-container").delegate('li.jcarousel-item', 'mouseover', function(e){
                            if(!$(this).hasClass("forbidden")){
                                $(this).find('.jcarousel-item-move').css("display", "block");
                            }
                        });
                        $(".jcarousel-container").delegate('li.jcarousel-item','mouseout',function(e){
                            if(!$(this).hasClass("forbidden")){
                                $(this).find('.jcarousel-item-move').css("display", "none");
                            }
                        });

                        var menuItems = $('ul.jcarousel-list');
                        menuItems.sortable({
                            items: 'li.jcarousel-item',
                            axis: 'x',
                            placeholder: 'ui-state-highlight' ,
                            revert: true,
                            scroll: true,
                            tolerance: 'pointer',
                            cursor: 'move',
                            opacity: 0.9,
                            //scrollSpeed:10 ,
                            //scrollSensitivity: 10 ,
                            //distance: 30,
                            stop: function(event, ui){
                                var newIds = [];
                                $('ul.jcarousel-list li.jcarousel-item').each(function() {
                                    newIds.push( $(this).attr('id').split('-')[2]);
                                });
                                var idStr = newIds.join(',');
                                console.log(idStr);
                                try {
                                    $.ajax({
                                        type : 'GET',
                                        dataType : 'json',
                                        url : Constant.ApiPath + 'sub/changeOrder',
                                        data: {newIds: idStr},

                                        success : function(json, textStatus) {
                                            console.log('Success to change order!!!');
                                        }
                                    });
                                } catch(err) {
                                    console.log(err.name + ': ' + err.message);
                                    menuItems.sortable( "cancel" );
                                }
                            }
                        });
                        menuItems.disableSelection();

                        $(".jcarousel-container").delegate('li.jcarousel-item','click',function(e){
                            if(!$(this).hasClass("forbidden")){
                                $('li.jcarousel-item').removeClass('active');
                                $(this).addClass('active');

                                var index = $(this).attr('id').split('-')[3];
                                $rootScope.CurrentSub = items[index];
                                angular.element('#cms-main').scope().showSub();
                            }
                        });

                        $('li.jcarousel-item').first().addClass('active');
                        var index = $('li.jcarousel-item').first().attr('id').split('-')[3];
                        $rootScope.CurrentSub = items[index];
                        angular.element('#cms-main').scope().showSub();
                    });
                }
            });
        }
    };
}]);


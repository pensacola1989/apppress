CmsUtil = {
    clearContentView: function (){
        var parentView = Em.View.views['cms_content_view'];
        parentView.get('childViews').forEach(function(item) {
            item.remove();
        });
        parentView.removeAllChildren();
    },

    createCmsMenu: function (items){
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
                            '<li id="jcarousel-item-' + items[i-1].id + '" class="' + cls + '" data-id="' + items[i-1].id + '" data-code="' + items[i-1].code + '">',
                                '<div class="jcarousel-item-container">',
                                    '<div><img src="images/icons/white/' + items[i-1].code + '.png" height=30 width=30></div>',
                                    '<div>' + items[i-1].title + '</div>',
                                '</div>',
                                '<div class="jcarousel-item-move"></div>',
                            '</li>'
                        ].join('')
                    );
                }
                carousel.size(items.length);
            }
        });
        $(".jcarousel-container").delegate('li.jcarousel-item', 'mouseover', (function(e){
            if(!$(this).hasClass("forbidden")){
                $(this).find('.jcarousel-item-move').css("display", "block");
            }
        }));
        $(".jcarousel-container").delegate('li.jcarousel-item','mouseout',(function(e){
            if(!$(this).hasClass("forbidden")){
                $(this).find('.jcarousel-item-move').css("display", "none");
            }
        }));

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
                    newIds.push( $(this).attr("id").replace('jcarousel-item-', '') );
                });
                var newIds = newIds.join(',');
                try {
                    $.ajax({
                        type : 'GET',
                        dataType : 'json',
                        url : Vari.ApiPath + 'sub/changeOrder',
                        data: {newIds: newIds},

                        success : function(json, textStatus) {
                            //console.log('Success to change order!!!');
                        }
                    });
                } catch(err) {
                    console.log(err.name + ': ' + err.message);
                    menuItems.sortable( "cancel" );
                }
            }
        });
        menuItems.disableSelection();
    },
    showCmsNav: function(arr) {
        var view = Em.View.views['cms_nav_view'];
        view.set("context", arr);
    },
    showCmsContent: function(view, content, context) {
        CmsUtil.clearContentView();

        var parentView = Em.View.views['cms_content_view'];
        parentView.pushObject(view);
    }

}
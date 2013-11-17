var CmsUtil = {
    CreateJCarousel: function (){
        var items = [];
        for (var i = 0; i < 12; i++) {
            items.push({
                id: i,
                image: '',
                status: i > 7? 0: 1,
                showMove: false
            });
        }

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
                            '<li id="jcarousel-item-' + items[i-1].id + '" class="' + cls + '">',
                                '<div class="jcarousel-item-container">',
                                    '<div><img src="img/icons-plugin-white/album.png" height=30 width=30></div>',
                                    '<div>Title</div>',
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
                    newIds.push( $(this).attr("id").replace('jcarousel-item-', '') );
                });
                var idStr = newIds.join(',');
                try {
//                        $.ajax({
//                            type : 'GET',
//                            dataType : 'json',
//                            url : Vari.ApiPath + 'sub/changeOrder',
//                            data: {newIds: idStr},
//
//                            success : function(json, textStatus) {
//                                //console.log('Success to change order!!!');
//                            }
//                        });
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

//                    CmsUtil.clearContentView();
//                    me.showCmsContent($(this).attr('data-id'), $(this).attr('data-code'));
            }
        });

        $('li.jcarousel-item').first().addClass('active');
//            me.showCmsContent(firstItem.id, firstItem.code);
//            $('#previewFrame').attr('src', Constant.ClientRoot+ '?preview=true' + '#/app/' + appId);
    }
};


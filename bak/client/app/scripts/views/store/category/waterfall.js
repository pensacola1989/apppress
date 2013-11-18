Client.StoreWaterfallView = Em.View.extend({
    templateName: 'store/category/waterfall',
    didInsertElement: function() {
        var me = this;
        var colNumb;
        var bodyWidth = $("body").width();

        if (bodyWidth <= 480) {
            colNumb = 2;
        } else if (bodyWidth > 480 && bodyWidth <= 1200) {
            colNumb = 3;
        } else {
            colNumb = 4;
        }

        var columnWidth = Math.floor(bodyWidth / colNumb);

        var contentWidth = columnWidth - 10;

        var categories = me.get('context').categories.get('content');
        var data1 = me.genData(categories, contentWidth);

        $('#waterfallContainer').append(data1).waterfall({
            itemSelector:'.item',
            columnCount:colNumb,
            columnWidth:columnWidth,
            isResizable:false,
            isAnimated:false,
            Duration:0,
            Easing:'swing',
            endFn:function(){
                var myScroll = new iScroll('wrapper');
                document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
            }
        });
    },

    genData: function (categories, contentWidth) {
        var date = [];
        var i = 0;
        categories.forEach(function(item, index) {
            date[i++]  = [
                '<div class="item" style="width:' + contentWidth +'px;">',
                    '<div><img src="' + item.get('picture') +  '"></div>',
                    '<div class="title">' + item.get('name') + '</div>',
                '</div>'
            ].join('');
        });
        return date.join('');
    }
});




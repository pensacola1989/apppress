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

        var columnWidth = Math.floor($("body").width()  / colNumb);
        var contentWidth = columnWidth - 10;

        console.log(me.get('context').categories.get('content'));
        var categories = me.get('context').categories.get('content');

        var data1 = me.genData(categories, contentWidth);

        //$('#more').hide();
        $('#waterfallContainer').append(data1).waterfall({
            itemSelector:'.item',
            columnCount:colNumb,
            columnWidth:columnWidth,
            isResizable:false,
            isAnimated:false,
            Duration:500,
            Easing:'swing',
            endFn:function(){
                $('#more').show();
            }
        });

       $('#more').click(function(){
            var h = $("#container").height();
            $('#more').hide();
            $('#container').append(data2).waterfall({
                endFn:function(){
                    $('#more').show();
                    //$("body").scrollTop(h);
                }
            });
        });
    },

    genData: function (categories, contentWidth) {

        var date = [];
        var i = 0;
        categories.forEach(function(item, index) {
            date[i++]  = [
                '<div class="item" style="width:' + contentWidth +';">',
                '<div><img src="/images/' + item.image +  '.jpg" style=""></div>',
                '<div class="title">' + item.name + '</div>',
                '</div>'
            ].join('');
        });
        return date.join('');
    }
});



Admin.StoreProductEditView = Em.View.extend({
    templateName: 'store/product/edit',
    didInsertElement: function() {
        var me = this;

        $('#fileupload').fileupload({
            url: Vari.ApiPath + 'upload',
            dataType: 'json',
            done: function (e, data) {
                var src = data.result.filePath;
                var picture = me.get('controller').store.createRecord('picture', {
                    src: src
                });
                me.get('context').get('pictures').pushObject(picture);
            },
            send: function (e, data) {
                if (me.get('context').get('pictures').get('length') >= 5) {
                    alert('You can only upload 5 pictures.');
                    return false;
                }
                if (data.total > 10000000) {
                    alert('File size must be less than 10M.');
                    return false;
                }
            }
        })

        $(".fileinput-preview").delegate('.picture-container', 'mouseover', (function(e){
            $(this).find('.remove').css("display", "block");
        }));
        $(".fileinput-preview").delegate('.picture-container','mouseout',(function(e){
            $(this).find('.remove').css("display", "none");
        }));

        $(".fileinput-preview").delegate('.picture-container .remove', 'click', (function(e){
             var src = $(this).prev("img").attr('src');
            console.log(me.get('context').get('pictures').get('length'));
            var idx = -1;
            me.get('context').get('pictures').forEach(function(item, index, enumerable){
                if ('/' + item.get('src')  == src) {
                    idx =  index;
                };
            });
            me.get('context').get('pictures').removeAt(idx);
            console.log(me.get('context').get('pictures').get('length'));
            $(this).parent('.picture-container').remove();
        }));
    }
});


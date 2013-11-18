Admin.StoreCategoryEditView = Em.View.extend({
    templateName: 'store/category/edit',
    didInsertElement: function() {
        var me = this;

        $('#fileupload').fileupload({
            url: Vari.ApiPath + 'upload',
            dataType: 'json',
            done: function (e, data) {
                var src = data.result.filePath;
                me.get('context').set('picture', src);
                console.log(me.get('context').get('picture'));
            },
            send: function (e, data) {
                if (data.total > 10000000) {
                    alert('File size must be less than 10M.');
                    return false;
                }
                return true;
            }
        });

        $(".fileinput-preview").delegate('.picture-container', 'mouseover', function(e){
            $(this).find('.remove').css("display", "block");
        });
        $(".fileinput-preview").delegate('.picture-container','mouseout',function(e){
            $(this).find('.remove').css("display", "none");
        });

        $(".fileinput-preview").delegate('.picture-container .remove', 'click', function(e){
            me.get('context').set('picture', '');
            $(this).parent('.picture-container').remove();
        });
    }
});


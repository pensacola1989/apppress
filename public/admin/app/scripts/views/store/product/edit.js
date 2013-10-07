Admin.StoreProductEditView = Em.View.extend({
    templateName: 'store/product/edit',
    didInsertElement: function() {
        var me = this;
        $('#imagesField').attr('readonly', 'readonly');

        $('#fileupload').fileupload({
            url: Vari.ApiPath + 'upload',
            dataType: 'json',
            done: function (e, data) {
                var src = data.result.filePath;
                var picture = me.get('controller').store.createRecord('picture', {
                    src: src
                });
                me.get('context').get('pictures').pushObject(picture);
            }
        })
    }
});


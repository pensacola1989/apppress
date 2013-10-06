Admin.AppsView = Em.View.extend({
    templateName: 'app/apps',
    didInsertElement: function() {
        $('#fileupload').fileupload({
            url: Vari.ApiPath + 'upload',
            dataType: 'json',
            done: function (e, data) {
                console.log(data);

            },
            progressall: function (e, data) {
                var progress = parseInt(data.loaded / data.total * 100, 10);
                $('#progress .progress-bar').css(
                    'width',
                    progress + '%'
                );
            }
        }).prop('disabled', !$.support.fileInput)
            .parent().addClass($.support.fileInput ? undefined : 'disabled');
    },

    handler: function() {    
    	
    }.observes('controller.content.isLoaded')
});

Admin.AppView = Em.View.extend({
    templateName: 'app/main',
    didInsertElement: function() {

    }
});

Admin.AppEditView = Em.View.extend({
    templateName: 'app/edit',
    didInsertElement: function() {

    }
});
Admin.AppsView = Em.View.extend({
    templateName: 'app/apps',
    didInsertElement: function() {

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

Admin.CmsView = Em.View.extend({
    templateName: 'cms/index',
    didInsertElement: function() {
        var subController = this.get("controller");
        var appController = subController.get('controllers.app');

        var app = appController.get('content');
        var appId = app.get('id');

        $.ajax({
            type : 'GET',
            dataType : 'json',
            url : Vari.ApiPath + 'subscriptions',
            data: {appId: appId},

            success : function(json, textStatus) {
                var items = json.subscription;
               Util.createModuleMenu(items);
            }
        });
    }
});

Admin.CmsPreviewView = Em.View.extend({
    templateName: 'cms/preview',
    didInsertElement: function() {

    }
});

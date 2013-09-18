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
                console.log(items);
                $('#module-menu').jcarousel({
                    itemLoadCallback: function (carousel, state) {
                        if (state != 'init') return;
                        for (i = 0; i < items.length; i++) {
                            carousel.add(i+1, '<li><div><img src="images/' + items[i].code + '.png" height=30 width=30></div><div>' + items[i].title + '</div></li>');
                        }
                        carousel.size(items.length);
                    }
                });
            }
        });
    }
});

Admin.CmsPreviewView = Em.View.extend({
    templateName: 'cms/preview',
    didInsertElement: function() {

    }
});

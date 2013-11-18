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
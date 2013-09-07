Admin.AppListView = Em.View.extend({
    templateName: 'app/list',
    didInsertElement: function() {
        alert(1);
    },
    handler: function() {    
    	
    }.observes('controller.content.isLoaded')
});
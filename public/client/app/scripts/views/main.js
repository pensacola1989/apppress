Client.MainView = Em.View.extend({
    templateName: 'main/content',
    didInsertElement: function() {
        $('nav#menu').mmenu();
    },

    handler: function() {    
    	
    }.observes('controller.content.isLoaded')
});
Client.AppView = Em.View.extend({
    templateName: 'app/main',
    didInsertElement: function() {
        $('#menu ul li').first().addClass('Selected');
        $('nav#menu').mmenu();

        this.get("controller").showCmsContent();
    },

    handler: function() {    

    }.observes('controller.content.isLoaded')
});
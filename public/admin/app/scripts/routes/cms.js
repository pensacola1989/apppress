Admin.CmsRoute = Ember.Route.extend({
    model: function(params) {

    },
    setupController: function(controller, app) {
        console.log(controller.get('controllers.app').get('content').get('name'));
//        controller.set('model', app);
    }
});



Admin.CmsRoute = Ember.Route.extend({
    model: function(params) {

    },
    setupController: function(controller, app) {
        var app = controller.get('controllers.app').get('content');
        var appId = app.get('id');

        var list = this.store.find('subscription', { appId: appId });
        controller.set('model', list);
    }
});



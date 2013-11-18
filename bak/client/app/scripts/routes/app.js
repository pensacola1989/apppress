Client.AppRoute = Ember.Route.extend({
    model: function(params) {
        if (Util.isNotEmpty(params.app_id)) {
            var app = this.store.find('app', params.app_id);
            return app;
        }
    },
    setupController: function(controller, app) {
        controller.set('model', app);
    }
});

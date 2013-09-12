Admin.AppRoute = Ember.Route.extend({
    actions: {
        createApp: function() {
            this.controller.createApp();
        },
        editApp: function(app) {
            this.controller.editApp(app);
        },
        saveApp: function(app) {
            this.controller.saveApp(app);
        },
        deleteApp: function(app) {
            this.controller.deleteApp(app);
        }
    }
});

Admin.AppListRoute = Ember.Route.extend({
    model: function(params) {
        var list = this.store.findAll('app');
        return list;
    }
});

Admin.AppEditRoute = Ember.Route.extend({
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



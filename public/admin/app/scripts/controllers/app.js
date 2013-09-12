Admin.AppListController = Em.Controller.extend({
    actions: {
        createApp: function() {
            var newApp = this.store.createRecord('app', {
                name: 'n',
                descr: 'd'
            });
            this.transitionToRoute("app.edit", newApp);
        },
        editApp: function(app) {
            this.transitionToRoute("app.edit", app);
        },
        deleteApp: function(app) {
            app.one("didDelete", this, function() {
                //this.transitionTo("app.list");
            });
            app.deleteRecord();
            app.save();
        },
        modifyApp: function(app) {
            var me = this;
        }
    }
});

Admin.AppEditController = Em.Controller.extend({
    actions: {
        saveApp: function(app) {
            var me = this;
            app.save();
            me.transitionToRoute("app.list");
        }
    }
});

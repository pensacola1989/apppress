Admin.AppsController = Em.Controller.extend({
    actions: {
        createApp: function() {
            var newApp = this.store.createRecord('app', {
                name: 'n',
                descr: 'd'
            });
            this.transitionToRoute("app.edit", newApp);
        },
        editApp: function(app) {
            console.log(app)
            this.transitionToRoute("app.edit", app);
        },
        modifyApp: function(app) {
            console.log(app);
            this.transitionToRoute("app.contents", app);
        },
        deleteApp: function(app) {
            app.one("didDelete", this, function() {
                //this.transitionTo("apps");
            });
            app.deleteRecord();
            app.save();
        },
        addContents: function(app) {
            var me = this;
        }
    }
});

Admin.AppController = Em.ObjectController.extend({

});

Admin.AppEditController = Em.Controller.extend({
    needs: "app",
    app: Ember.computed.alias("controllers.app"),
    actions: {
        saveApp: function(app) {
            var me = this;
            app.save();
            me.transitionToRoute("apps");
        }
    }
});

Admin.AppContentsController = Em.ArrayController.extend({
    needs: "app",
    app: Ember.computed.alias("controllers.app"),
    actions: {
        save: function(app) {
            console.log(this.get('controllers.app').get('content').get('name'));
        }
    }
});

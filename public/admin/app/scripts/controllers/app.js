Admin.AppController = Em.Controller.extend({
    createApp: function(app) {
        var app = this.store.createRecord('app', {
            name: '1',
            descr: '1'
        });
        this.transitionToRoute("app.edit", app);
    },
    editApp: function(app) {
        this.transitionToRoute("app.edit", app);
    },
    saveApp: function(app) {
        var me = this;
        app.save();
        me.transitionToRoute("app.list");
    },
    deleteApp: function(app) {
        var me = this;
    }
});
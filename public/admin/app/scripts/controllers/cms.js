Admin.CmsController = Em.ArrayController.extend({
    needs: "app",
    app: Ember.computed.alias("controllers.app"),
    actions: {
        save: function(app) {
            console.log(this.get('controllers.app').get('content').get('name'));
        },
        editProduct: function(app) {

        }
    }
});

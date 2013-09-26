Admin.CmsController = Em.ArrayController.extend({
    needs: "app",
    app: Ember.computed.alias("controllers.app"),
    actions: {
        saveStore: function(app) {
            console.log(this.get('controllers.app').get('content').get('name'));
        },
        viewCategory: function(category) {
            CmsUtil.clearContentView();
            var childView = Admin.ProductListView.create();
            var parentView = Em.View.views['sub_content_view'];
            parentView.pushObject(childView);

            childView.set("context", category.get('products'));
        }
    },
    showSubContent: function(subId, subCode) {
        if (subCode === 'store') {
            var data = this.store.find('mstore', {subId: subId});

            var childView = Admin.StoreListView.create();
            var parentView = Em.View.views['sub_content_view'];
            parentView.pushObject(childView);
            childView.set("context", data);
        }
    }
});

Admin.CmsController = Em.ArrayController.extend({
    needs: "app",
    app: Ember.computed.alias("controllers.app"),
    actions: {
        saveStore: function(app) {
            console.log(this.get('controllers.app').get('content').get('name'));
        },
        showProductList: function(category) {
            var me =this;
            CmsUtil.clearContentView();

            var products = me.store.find('product', {categoryId: category.id});
            var childView = Admin.ProductListView.create();
            var parentView = Em.View.views['sub_content_view'];
            parentView.pushObject(childView);

            childView.set("context", products);
        }
    },
    showStoreCategories: function(subId, subCode) {
        var me = this;
        var sub = me.store.find('subscription', subId).then(function(sub) {
            var moduleId = sub.get('moduleId');
            if (subCode === 'store') {
                var store = me.store.find('mstore', moduleId);
                var categories = me.store.find('category', {mstoreId: moduleId});

                var childView = Admin.StoreListView.create();
                var parentView = Em.View.views['sub_content_view'];
                parentView.pushObject(childView);
                childView.set("context", {store: store, categories: categories});

            }
        });
    }
});

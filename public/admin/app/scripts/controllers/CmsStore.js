Admin.CmsStoreController = Em.ArrayController.extend({
    needs: ['app', 'cms'],
    actions: {
        showStoreProductList: function(category) {
            var me =this;
            CmsUtil.clearContentView();

            var products = me.store.find('product', {categoryId: category.id});
            var childView = Admin.ProductListView.create();
            var parentView = Em.View.views['sub_content_view'];
            parentView.pushObject(childView);

            childView.set("context", products);
        },
        saveStore: function(app) {
            console.log(this.get('controllers.app').get('content').get('name'));
        }
    },
    showContent: function(moduleId) {
        var me = this;
        var store = me.store.find('mstore', moduleId);
        var categories = me.store.find('category', {mstoreId: moduleId});

        var childView = Admin.StoreListView.create({
            controller: me
        });
        var parentView = Em.View.views['sub_content_view'];
        parentView.pushObject(childView);
        childView.set("context", {store: store, categories: categories});
    }
});


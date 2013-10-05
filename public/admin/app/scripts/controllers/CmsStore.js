Admin.CmsStoreController = Em.ArrayController.extend({
    needs: ['app', 'cms'],
    actions: {
        showStoreProductList: function(category) {
            var me =this;
            CmsUtil.clearContentView();

            var products = me.store.find('product', {categoryId: category.id});
            var childView = Admin.StoreProductListView.create();
            var parentView = Em.View.views['cms_content_view'];
            parentView.pushObject(childView);

            childView.set("context", products);
            CmsUtil.showCmsNav([{label: 'store'}, {label: 'list'}]);
        },
        createCategory: function(mstore) {
            var me =this;

            var newCategory = me.store.createRecord('category', {
                name: 'nn',
                mstore: mstore
            });
            CmsUtil.clearContentView();
            var childView = Admin.StoreCategoryEditView.create({
                controller: me
            });
            var parentView = Em.View.views['cms_content_view'];
            parentView.pushObject(childView);

            childView.set("context", newCategory);
            CmsUtil.showCmsNav([{label: 'store'}, {label: 'edit'}]);

        },
        saveCategory: function(category) {
            var me = this;

            category.one("didCreate", this, function() {
                me.showContent(category.get('mstore'));
            });
            category.one("didUpdate", this, function() {
                me.showContent(category.get('mstore'));
            });
            category.save();
        }
    },

    showContent: function(subId) {
        CmsUtil.clearContentView();

        var me = this;
        me.store.find('mstore', {subscriptionId: subId}).then(function(mstores) {
            var mstore = mstores.get('content')[0];
            me.store.find('category', {mstoreId: mstore.get('id')}).then(function(categories) {
                var childView = Admin.StoreCategoryListView.create({
                    controller: me
                });
                var parentView = Em.View.views['cms_content_view'];
                parentView.pushObject(childView);
                childView.set("context", {store: mstore, categories: categories});

                CmsUtil.showCmsNav([{label: 'store'}]);
            });
        });
    }
});


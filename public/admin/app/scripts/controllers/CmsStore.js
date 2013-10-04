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

            var newCategory = this.store.createRecord('category', {
                name: 'nn',
                //mstore: mstore
                //categories: []
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

    showContent: function(moduleId) {
        CmsUtil.clearContentView();

        var me = this;
        var store = me.store.find('mstore', moduleId);
        var categories = me.store.find('category', {mstoreId: moduleId});

        var childView = Admin.StoreCategoryListView.create({
            controller: me
        });
        var parentView = Em.View.views['cms_content_view'];
        parentView.pushObject(childView);
        childView.set("context", {store: store, categories: categories});

        CmsUtil.showCmsNav([{label: 'store'}]);

    }
});


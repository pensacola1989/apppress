Admin.CmsStoreController = Em.ArrayController.extend({
    needs: ['app', 'cms'],
    actions: {
        createCategory: function(mstore) {
            var me =this;

            var newCategory = me.store.createRecord('category', {
                name: 'nn',
                mstore: mstore
            });
            CmsUtil.clearContentView();
            var childView = Admin.StoreCategoryEditView.create({
                controller: me,
                context: newCategory
            });
            CmsUtil.showCmsContent(childView);
            CmsUtil.showCmsNav([{label: 'store'}, {label: 'edit'}]);

        },
        editCategory: function(category) {
            var me =this;

            var childView = Admin.StoreCategoryEditView.create({
                controller: me,
                context: category
            });
            CmsUtil.showCmsContent(childView);
            CmsUtil.showCmsNav([{label: 'store'}, {label: 'edit'}]);
        },
        saveCategory: function(category) {
            var me = this;

            category.one("didCreate", this, function() {
                me.showContent();
            });
            category.one("didUpdate", this, function() {
                me.showContent();
            });
            category.save();
        },
        deleteCategory: function(category) {
            var me = this;
            var subId = category.get('mstore').get('id');
            category.one("didDelete", this, function() {
                me.showContent();
            });
            me.store.deleteRecord(category);
            category.save();
        },
        showStoreProductList: function(category) {
            var me =this;
            CmsUtil.clearContentView();


            var products = me.store.find('product', {categoryId: category.id});
            var childView = Admin.StoreProductListView.create({
                controller: me,
                context: products
            });
            CmsUtil.showCmsContent(childView);
            CmsUtil.showCmsNav([{label: 'store'}, {label: 'list'}]);
        }
    },

    showContent: function() {
        CmsUtil.clearContentView();

        var me = this;
        me.store.find('mstore', {subscriptionId: Vari.CurrSubId}).then(function(mstores) {
            var mstore = mstores.get('content')[0];
            me.store.find('category', {mstoreId: mstore.get('id')}).then(function(categories) {
                var childView = Admin.StoreCategoryListView.create({
                    controller: me,
                    context: {store: mstore, categories: categories}
                });
                CmsUtil.showCmsContent(childView);
                CmsUtil.showCmsNav([{label: 'store'}]);
            });
        });
    }
});


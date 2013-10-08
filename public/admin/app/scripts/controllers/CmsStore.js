Admin.CmsStoreController = Em.ArrayController.extend({
    needs: ['app', 'cms'],

    actions: {
        createCategory: function(mstore) {
            var me =this;

            var newCategory = me.store.createRecord('category', {
                name: '',
                mstore: mstore
            });
            CmsUtil.clearContentView();
            var childView = Admin.StoreCategoryEditView.create({
                controller: me,
                context: newCategory
            });
            CmsUtil.showCmsContent(childView);
            CmsUtil.showCmsNav([{label: 'categories'}, {label: 'create'}]);

        },
        editCategory: function(category) {
            var me =this;

            var childView = Admin.StoreCategoryEditView.create({
                controller: me,
                context: category
            });
            CmsUtil.showCmsContent(childView);
            CmsUtil.showCmsNav([{label: 'categories'}, {label: 'edit'}]);
        },
        saveCategory: function(category) {
            var me = this;

            var form = $('#categoryEditForm');
            form.validate()
            if (!form.valid()) return;

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
        showProductList: function(category) {
            this.showProductList(category);
        },
        createProduct: function(category) {
            var me =this;

            var newProduct = me.store.createRecord('product', {
                name: 'pp',
                category: category
            });
            CmsUtil.clearContentView();
            var childView = Admin.StoreProductEditView.create({
                controller: me,
                context: newProduct
            });
            CmsUtil.showCmsContent(childView);
            CmsUtil.showCmsNav([{label: 'categories'}, {label: 'products'}, {label: 'create'}]);

        },
        editProduct: function(product) {
            var me =this;

            var childView = Admin.StoreProductEditView.create({
                controller: me,
                context: product
            });
            CmsUtil.showCmsContent(childView);
            CmsUtil.showCmsNav([{label: 'categories'}, {label: 'products'}, {label: 'edit'}]);
        },
        saveProduct: function(product) {
            var me = this;
            jQuery.validator.setDefaults({
                debug: true,
                success: "valid"
            });
            var form = $('#productEditForm');
            form.validate()
            if (!form.valid()) return;

            if (product.get('pictures').get('length') <= 0) {
                alert('Please at lease upload one picture.');
                return;
            }

            var str = '';

            product.get('pictures').forEach(function(item) {
                if (Util.isNotEmpty(str))  str += ',';
                str += item.get('src');
            });
            product.set('pictureStr', str)

            var category = product.get('category');

            product.one("didCreate", this, function() {
                me.showProductList(category);
            });
            product.one("didUpdate", this, function() {
                me.showProductList(category);
            });
            product.save();
        },
        deleteProduct: function(product) {
            var me = this;
            var category = product.get('category');
            product.one("didDelete", this, function() {
                me.showProductList(category);
            });
            me.store.deleteRecord(product);
            product.save();
        }
    },

    // called by the sub menu
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
                CmsUtil.showCmsNav([{label: 'categories'}]);
            });
        });
    },
    showProductList: function(category) {
        var me =this;
        me.store.find('product', {categoryId: category.id}).then(function(products) {

            var childView = Admin.StoreProductListView.create({
                controller: me,
                context: {category: category, products: products}
            });
            CmsUtil.showCmsContent(childView);
            CmsUtil.showCmsNav([{label: 'categories'}, {label: 'products'}]);
        });
    }
});


Client.CmsStoreController = Em.ArrayController.extend({
    needs: ['app'],

    actions: {

    },

    // called by the sub menu
    showContent: function() {
        console.log('CmsStoreController.showContent()');
//        CmsUtil.clearContentView();
//
//        var me = this;
//        me.store.find('mstore', {subscriptionId: Vari.CurrSubId}).then(function(mstores) {
//            var mstore = mstores.get('content')[0];
//            me.store.find('category', {mstoreId: mstore.get('id')}).then(function(categories) {
//                var childView = Admin.StoreCategoryListView.create({
//                    controller: me,
//                    context: {store: mstore, categories: categories}
//                });
//                CmsUtil.showCmsContent(childView);
//                CmsUtil.showCmsNav([{label: 'categories'}]);
//            });
//        });
    }
});



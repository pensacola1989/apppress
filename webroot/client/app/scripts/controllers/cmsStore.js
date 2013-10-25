Client.CmsStoreController = Em.ArrayController.extend({
    needs: ['app'],

    actions: {

    },

    // called by the sub menu
    showContent: function() {

        var me = this;
        CmsUtil.clearContentView();

        me.store.find('mstore', {subscriptionId: Vari.CurrSubId}).then(function(mstores) {
            var mstore = mstores.get('content')[0];
            me.store.find('category', {mstoreId: mstore.get('id')}).then(function(categories) {
                console.log(categories.get('content')[0].get('name'));
                var childView = Client.StoreWaterfallView.create({
                    controller: me,
                    context: {store: mstore, categories: categories}
                });
                CmsUtil.showCmsContent(childView);
            });
        });
    }
});



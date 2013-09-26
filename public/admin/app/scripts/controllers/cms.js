Admin.CmsController = Em.ArrayController.extend({
    needs: "app",
    app: Ember.computed.alias("controllers.app"),
    actions: {
        saveStore: function(app) {
            console.log(this.get('controllers.app').get('content').get('name'));
        },
        viewCategory: function(category) {
            CmsUtil.clearContentView();
            var childView = Admin.StoreContentView.create();
            var parentView = Em.View.views['sub_content_view'];
            parentView.pushObject(childView);
            childView.set("context", category);
        }
    },
    showSubContent: function(subId, subCode) {
        if (subCode === 'store') {
            var data = this.store.find('mstore', {subId: subId});
            console.log(data);

            var childView = Admin.SubContentView.create();
            var parentView = Em.View.views['sub_content_view'];
            parentView.pushObject(childView);
            childView.set("context", data);
        }

//        if (subCode === 'store') {
//            $.ajax({
//                type : 'GET',
//                dataType : 'json',
//                url : Vari.ApiPath + 'store/content',
//                data: {subId: subId},
//
//                success : function(json, textStatus) {
//                    console.log(json);
//                    var childView = Admin.SubContentView.create();
//                    var parentView = Em.View.views['sub_content_view'];
//                    parentView.pushObject(childView);
//                    childView.set("context", json);
//                }
//            });
//        }
    }
});

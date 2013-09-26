Admin.CmsView = Em.View.extend({
    templateName: 'cms/index',
    didInsertElement: function() {
        var subController = this.get("controller");
        var appController = subController.get('controllers.app');

        var app = appController.get('content');
        var appId = app.get('id');

        $.ajax({
            type : 'GET',
            dataType : 'json',
            url : Vari.ApiPath + 'sub/list',
            data: {appId: appId},

            success : function(json, textStatus) {
                var items = json;
                CmsUtil.createSubMenu(items);
                $(".jcarousel-container").delegate('li.jcarousel-item','click',(function(e){
                    if(!$(this).hasClass("forbidden")){
                        $('li.jcarousel-item').removeClass('active');
                        $(this).addClass('active');

                        CmsUtil.clearContentView();
                        subController.showStoreCategories($(this).attr('data-id'), $(this).attr('data-code'));
                    }
                }));
            }
        });
    }
});

Admin.CmsPreviewView = Em.View.extend({
    templateName: 'cms/preview',
    didInsertElement: function() {

    }
});
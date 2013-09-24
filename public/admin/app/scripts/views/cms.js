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
                CmsUtil.createModuleMenu(items);
                $(".jcarousel-container").delegate('li.jcarousel-item','click',(function(e){
                    if(!$(this).hasClass("forbidden")){
                        CmsUtil.editSub($(this).attr('id').replace('jcarousel-item-', ''));
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
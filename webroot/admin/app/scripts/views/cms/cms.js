Admin.CmsView = Em.View.extend({
    templateName: 'cms/index',
    didInsertElement: function() {
        this.get("controller").createCmsMenuAndPreview();
    }
});

Admin.CmsPreviewView = Em.View.extend({
    templateName: 'cms/preview',
    didInsertElement: function() {

    }
});
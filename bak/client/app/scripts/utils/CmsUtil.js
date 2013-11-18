CmsUtil = {
    clearContentView: function (){
        /*jshint -W069 */
        var parentView = Em.View.views['cms_content_view'];
        parentView.get('childViews').forEach(function(item) {
            item.remove();
        });
        parentView.removeAllChildren();
    },

    showCmsContent: function(view, content, context) {
        CmsUtil.clearContentView();
        /*jshint -W069 */
        var parentView = Em.View.views['cms_content_view'];
        parentView.pushObject(view);
    }

};
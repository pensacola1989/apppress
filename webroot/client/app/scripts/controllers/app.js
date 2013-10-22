Client.AppController = Em.Controller.extend({
    needs: ['cmsStore'],
    actions: {

    },
    showCmsContent: function(subId, subCode) {
        var me = this;

        var app = me.get('content');
        var sub = app.get('sortedSubscriptions')[0];
        Vari.CurrSubId = sub.get('id');
        var subCode = sub.get('code');
        me.get('controllers.cms' + Util.capFirstLetter(subCode)).showContent();
    }
});
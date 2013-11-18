Admin.IndexRoute = Ember.Route.extend({
    redirect: function() {
        var me = this;
        AccountUtil.signonWithToken();
    }
});

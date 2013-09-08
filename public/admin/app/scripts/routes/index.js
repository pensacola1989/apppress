Admin.IndexRoute = Ember.Route.extend({
    redirect: function() {
    	var me = this;

        //location.href="#/apps";
        //me.transitionTo("app.list");
        AccountUtil.signonWithToken();
    }
});

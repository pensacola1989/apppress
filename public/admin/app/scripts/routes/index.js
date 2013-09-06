Admin.IndexRoute = Ember.Route.extend({
    redirect: function() {
    	var me = this;

        //location.href="#dashboard/index";
        me.transitionTo("dashboard.index");
        //AccountUtil.signonWithToken();
    }
});

Admin.IndexRoute = Ember.Route.extend({
    model: function () {
        return ['red', 'yellow', 'blue'];
    },
    redirect: function() {
    	var me = this;
        AccountUtil.signonWithToken();
    }
});

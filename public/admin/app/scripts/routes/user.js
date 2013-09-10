Admin.UserSignonRoute = Ember.Route.extend({

});

Admin.UserSignupRoute = Ember.Route.extend({

});

Admin.UserSignoutRoute = Ember.Route.extend({
	setupController : function(controller, model) {
		var me = this;
        $.removeCookie(Vari.TokenName);
        Vari.UserEmail = null;
		me.transitionTo("user.signon");
	}
});
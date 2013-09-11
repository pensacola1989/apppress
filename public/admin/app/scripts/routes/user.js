Admin.UserRoute = Ember.Route.extend({
    actions: {
        signon: function() {
            this.controller.signon();
        },
        signup: function() {
            this.controller.signup();
        }
    }
});

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
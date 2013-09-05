Admin.UserSignonRoute = Ember.Route.extend({

});

//Server.UserSignupRoute = Ember.Route.extend({
//	setupController : function(controller, model) {
//
//	}
//});
//
//Server.UserSignoutRoute = Ember.Route.extend({
//	setupController : function(controller, model) {
//		var me = this;
//
//
//		$.ajax({
//			type : 'POST',
//			dataType : 'json',
//			//contentType: "application/json",
//			async : false,
//			url : Vari.ApiRestV1 + 'user/signout',
//			data : {
//
//			},
//			success : function(json) {
//				if (json.success) {
//					$.removeCookie(Vari.TokenName);
//					me.transitionTo("user.signon");
//				}
//			}
//		});
//	}
//});
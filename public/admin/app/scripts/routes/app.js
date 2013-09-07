Admin.AppListRoute = Ember.Route.extend({
    model: function(params) {
        var list = this.store.findAll('app');
        console.log(list);
        return list;
    },
//	setupController : function(controller, model) {
//		var me = this;
//		$.ajax({
//			type : 'GET',
//			dataType : 'json',
//			//contentType: "application/json",
//			async : false,
//			url : Vari.ApiRestV1 + 'apps',
//
//			success : function(json, textStatus) {
//				Vari.UserEmail = json.email;
//
//				var appVos = [];
//				var i = 1;
//				json.apps.forEach(function(formTo) {
//					var vo = AppUtil.genAppVo(formTo, i++);
//					appVos.pushObject(vo);
//				});
//				controller.set('content', appVos);
//			}
//
//		});
//	},
	events : {

	}
});

Admin.AppsNewRoute = Ember.Route.extend({
	model: function(params) {
	},
	setupController : function(controller, model) {
		var app = AppUtil.newApp();
		Vari.CurrAppId = app.get("id");
		Vari.app = app;
		
		this.transitionTo("app.edit", app);
	},
});

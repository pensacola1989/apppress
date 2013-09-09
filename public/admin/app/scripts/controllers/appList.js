Admin.AppListController = Em.Controller.extend({
	viewApp: function(app) {
		Vari.CurrAppId = app.get("id");
		this.transitionToRoute("forms", app);
	},
	editApp: function(app) {
		Vari.CurrAppId = app.get("id");
		this.transitionToRoute("app.edit", app);
	},
	deleteApp: function(app) {

		var me = this;
    	var json = $.toJSON(app);

    	$.ajax({
			type : "DELETE",
			dataType: 'json',
			contentType: 'application/json; charset=utf-8',

			async : false,
			url : Vari.ApiRestV1 + 'apps',
			data : json,

			success : function(json) {
				if (json.success) {
					var ls = me.get("content").without(app);
					me.set("content", ls);
				}
			}
		});
	},
	runApp: function(app) {
		var me = this;
		this.transitionToRoute("app.run", app);
	}
});
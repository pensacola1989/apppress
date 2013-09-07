Admin.DashboardRoute = Ember.Route.extend({

});

Admin.DashboardIndexRoute = Ember.Route.extend({
//    model: function () {
//        return ['red', 'yellow', 'blue'];
//    },
    setupController : function(controller, model) {
        controller.set('content', ['red', 'yellow', 'blue']);
    }
});

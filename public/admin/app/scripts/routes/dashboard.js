Admin.DashboardRoute = Ember.Route.extend({

});

Admin.DashboardIndexRoute = Ember.Route.extend({
    model: function () {
        return ['red', 'yellow', 'blue'];
    },
    redirect: function() {

    }
});

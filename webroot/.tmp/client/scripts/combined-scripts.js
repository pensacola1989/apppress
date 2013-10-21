(function() {

var Client = window.Client = Ember.Application.create();

/* Order and include as you please. */

})();

(function() {

Client.MainController = Em.Controller.extend({
    actions: {

    }
});

})();

(function() {



})();

(function() {

Client.Store = DS.Store.extend({
    adapter: DS.FixtureAdapter.create()
});


})();

(function() {



})();

(function() {



})();

(function() {

Client.ApplicationRoute = Ember.Route.extend({
    // admittedly, this should be in IndexRoute and not in the
    // top level ApplicationRoute; we're in transition... :-)
    model: function () {
        return ['red', 'yellow', 'blue'];
    }
});


})();

(function() {

Client.IndexRoute = Ember.Route.extend({
    redirect: function() {
        this.transitionTo('main');
    }
});


})();

(function() {



})();

(function() {

Client.MainView = Em.View.extend({
    templateName: 'main/content',
    didInsertElement: function() {
        $('nav#menu').mmenu();
    },

    handler: function() {    

    }.observes('controller.content.isLoaded')
});

})();

(function() {



})();

(function() {

Client.Router.map(function () {
    Client.Router.map(function () {
        this.resource('index', { path: '/'});

        this.resource('main', { path: '/main' }, function() {
        });
    });
});




})();

(function() {




})();
!function(){window.Client=Ember.Application.create()}(),function(){Client.MainController=Em.Controller.extend({actions:{}})}(),function(){Client.Store=DS.Store.extend({adapter:DS.FixtureAdapter.create()})}(),function(){Client.ApplicationRoute=Ember.Route.extend({model:function(){return["red","yellow","blue"]}})}(),function(){Client.IndexRoute=Ember.Route.extend({redirect:function(){this.transitionTo("main")}})}(),function(){Client.MainView=Em.View.extend({templateName:"main/content",didInsertElement:function(){$("nav#menu").mmenu()},handler:function(){}.observes("controller.content.isLoaded")})}(),function(){Client.Router.map(function(){Client.Router.map(function(){this.resource("index",{path:"/"}),this.resource("main",{path:"/main"},function(){})})})}();
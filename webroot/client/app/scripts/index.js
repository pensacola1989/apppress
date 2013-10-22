var Client = window.Client = Ember.Application.create();

require('constant');
require('utils/*');
require('controllers/*');
require('store');
require('models/*');
require('views/**/*');
require('router');
require('routes/*');

Client.ApplicationAdapter = DS.RESTAdapter.extend({
    namespace: 'api/' + Constant.ApiVer,
    host: Constant.WebRoot.substr(0, Constant.WebRoot.length - 1)
});

Client.Store = DS.Store.extend();

$.ajaxSetup({
    statusCode: {
        555: function() {
            console.log('Not Signon Error.');
        }
    }
});
$.cookie.defaults = { expires: 7, path: '/', domain: "localhost" };

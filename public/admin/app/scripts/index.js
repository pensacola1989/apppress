window.Admin = Ember.Application.create();

require('utils/*');
require('controllers/*');
require('store');
require('models/*');
require('views/**/*');
require('router');
require('routes/*');

Admin.ApplicationAdapter = DS.RESTAdapter.extend({
    namespace: 'api/v1',
    host: 'http://192.168.1.228:9000'
});

Admin.Store = DS.Store.extend();

$.ajaxSetup({
    statusCode: {
        555: function() {
            AccountUtil.signonWithToken();
        }
    }
});
$.cookie.defaults = { expires: 7, path: '/', domain: "localhost" };

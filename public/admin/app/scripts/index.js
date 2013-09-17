
window.Admin = Ember.Application.create();

require('scripts/utils/*');
require('scripts/controllers/*');
require('scripts/store');
require('scripts/models/*');
require('scripts/views/**/*');
require('scripts/router');
require('scripts/routes/*');


Admin.ApplicationAdapter = DS.RESTAdapter.extend({
    namespace: 'api/v1',
    host: 'http://192.168.1.228:9000'
});

$.ajaxSetup({
    statusCode: {
        555: function() {
            AccountUtil.signonWithToken();
        }
    }
});

Admin.Store = DS.Store.extend();



$.cookie.defaults = { expires: 7, path: '/', domain: "localhost" };


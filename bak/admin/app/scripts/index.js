window.Admin = Ember.Application.create();

require('constant');
require('utils/*');
require('controllers/*');
require('store');
require('models/*');
require('views/**/*');
require('router');
require('routes/*');

Admin.ApplicationAdapter = DS.RESTAdapter.extend({
    namespace: 'api/' + Constant.ApiVer,
    host: Constant.WebRoot.substr(0, Constant.WebRoot.length - 1)
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

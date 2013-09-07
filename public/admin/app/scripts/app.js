window.Admin = Ember.Application.create();

require('scripts/utils/*');
require('scripts/controllers/*');
require('scripts/store');
require('scripts/models/*');
require('scripts/views/*');
require('scripts/router');
require('scripts/routes/*');

Admin.ApplicationAdapter = DS.RESTAdapter.extend({
    namespace: 'api/v1',
    host: 'http://localhost:9000'
});


Admin.Store = DS.Store.extend();

$.ajaxSetup({
    error: function(qXHR, textStatus) {
        if (textStatus == "error") {
            if (Code.NotSignon == $.parseJSON(qXHR.responseText).code) {
                AccountUtil.signonWithToken();
            }
        }
    }
});

$.cookie.defaults = { expires: 7, path: '/', domain: "localhost" };

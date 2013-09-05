window.Admin = Ember.Application.create();

require('scripts/utils/*');
require('scripts/controllers/*');
require('scripts/store');
require('scripts/models/*');
require('scripts/views/*');

require('scripts/router');
require('scripts/routes/*');

$.ajaxSetup({
    error: function(qXHR, textStatus) {
        if (textStatus == "error") {
            if (Code.NotSignon == $.parseJSON(qXHR.responseText).code) {
                AccountUtil.signonWithToken();
            }
        }
    }
});

//$.cookie.defaults = { expires: 7, path: '/', domain: "localhost" };

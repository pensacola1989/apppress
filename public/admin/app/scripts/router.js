Admin.Router.map(function () {
    this.resource('index', { path: '/'});
    this.resource('user', { path: '/user' }, function() {
        //this.route(config.api_version  + 'signup', { path: '/signup' });
        this.route(config.api_version  + 'signon', { path: '/signon' });
        //this.route(config.api_version  + 'signout', { path: '/signout' });
    });
});

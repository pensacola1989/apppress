Admin.Router.map(function () {
    this.resource('index', { path: '/'});
    this.resource('user', { path: '/user' }, function() {
        //this.route('signup', { path: '/signup' });
        this.route('signon', { path: '/signon' });
        //this.route('signout', { path: '/signout' });
    });
});

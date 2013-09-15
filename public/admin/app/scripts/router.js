Admin.Router.map(function () {
    this.resource('index', { path: '/'});
    this.resource('user', { path: '/user' }, function() {
        this.route('signup', { path: '/signup' });
        this.route('signon', { path: '/signon' });
        this.route('signout', { path: '/signout' });
    });

    this.resource('apps', { path: '/apps' }, function() {
    });
    this.resource('app', { path: '/app/:app_id' }, function() {
        this.route('edit', { path: 'edit' });
    });

    this.resource('cms', { path: '/cms' }, function() {

    });
});

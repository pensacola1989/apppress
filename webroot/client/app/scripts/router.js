Client.Router.map(function () {
    Client.Router.map(function () {
        this.resource('index', { path: '/'});

        this.resource('app', { path: 'app/:app_id' }, function() {

        });
    });
});



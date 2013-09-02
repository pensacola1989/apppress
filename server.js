var path = require('path');
var express = require('express');
var config = require('./config');

var server = express();
server.configure(function () {
    server.use(express.bodyParser()); //parses request body and populates req.body
    server.use(express.methodOverride()); //checks req.body for HTTP method overrides
    server.use(server.router); //perform route lookup based on url and HTTP method
    server.use(express.static(path.join(__dirname, 'public'))); //Where to serve static content
    server.use(express.errorHandler({ dumpExceptions:true, showStack:true })); //Show all errors in development

    server.use(express.cookieParser());
    server.use(express.session({
        secret: config.session_secret
    }));
//    server.use(require('./controllers/sign').auth_user);
//    server.use(require('./controllers/site').sidebar);

});

//Start server
server.listen(9000, function () {
    console.log("Express server listening on port %d in %s mode", server.port, server.settings.env);
});
server.get('/api', function(req, res){
    res.send('Library API is running');
});

var modules = config.modules || [];
for (var i = 0, l = modules.length; i < l; i++) {
    var module = modules[i];
    require('./uploads/modules/' + module[0] + '/route')(server)
    //server.use(require('./plugins/' + p[0])(p[1]));
}

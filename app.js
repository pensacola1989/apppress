var path = require('path');
var express = require('express');
var config = require('./config');

var server = express();
server.configure(function () {
    server.use(express.bodyParser({
        keepExtensions:true,
        limit:10000000,
        //defer:true,
        uploadDir: "d:/"})
    );
    server.use(express.cookieParser());
    server.use(express.session({secret: 'apppress'}));

    server.use(express.methodOverride()); //checks req.body for HTTP method overrides
    server.use(server.router); //perform route lookup based on url and HTTP method
    server.use(express.static(config.web_root)); //Where to serve static content
    server.use(express.errorHandler({ dumpExceptions:true, showStack:true })); //Show all errors in development

});
express.static.mime.define({'application/font-woff': ['woff']});

//Start server
server.listen(config.port, function () {
    console.log("Express server listening on port %d in %s mode", config.port, server.settings.env);
});
server.get('/api', function(req, res){
    res.send('Library API is running');
});

var infrastructures = config.infrastructures || [];
for (var i = 0, l = infrastructures.length; i < l; i++) {
    var infrastructure = infrastructures[i];
    require('./infrastructures/' + infrastructure + '/route')(server);
}

var components = config.components || [];
for (var i = 0, l = components.length; i < l; i++) {
    var components = components[i];
    require('./components/' + module + '/route')(server);
}
var modules = config.modules || [];
for (var i = 0, l = modules.length; i < l; i++) {
    var module = modules[i];
    require('./modules/' + module + '/route')(server);
}
var plugins = config.plugins || [];
for (var i = 0, l = plugins.length; i < l; i++) {
    var plugins = plugins[i];
    require('./plugins/' + module + '/route')(server);
}

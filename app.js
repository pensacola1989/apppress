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
    server.use(express.static(path.join(__dirname, 'web'))); //Where to serve static content
    server.use(express.errorHandler({ dumpExceptions:true, showStack:true })); //Show all errors in development

});
express.static.mime.define({'application/font-woff': ['woff']});

//Start server
server.listen(9000, function () {
    console.log("Express server listening on port %d in %s mode", config.port, server.settings.env);
});
server.get('/api', function(req, res){
    res.send('Library API is running');
});

var modules = config.modules || [];
for (var i = 0, l = modules.length; i < l; i++) {
    var module = modules[i];
    require('./system/modules/' + module + '/route')(server);
}

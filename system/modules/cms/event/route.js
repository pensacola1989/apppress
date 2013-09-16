var config = require('../../../../config');
var eventController = require('./contrl');

exports = module.exports = function(server) {
    server.get(config.api_version  + 'events', eventController.findAll);
    server.get(config.api_version  + 'events/:id', eventController.findById);
    server.post(config.api_version  + 'events', eventController.save);
    server.put(config.api_version  + 'events/:id', eventController.update);
    server.delete(config.api_version  + 'events/:id', eventController.delete);
};
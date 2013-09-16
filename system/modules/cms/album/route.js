var config = require('../../../../config');
var albumController = require('./contrl');

exports = module.exports = function(server) {
    server.get(config.api_version  + 'albums', albumController.findAll);
    server.get(config.api_version  + 'albums/:id', albumController.findById);
    server.post(config.api_version  + 'albums', albumController.save);
    server.put(config.api_version  + 'albums/:id', albumController.update);
    server.delete(config.api_version  + 'albums/:id', albumController.delete);
};
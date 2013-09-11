var config = require('../../../config');
var appController = require('./contrl');

exports = module.exports = function(server) {
    server.get(config.api_version  + 'apps', appController.findAll);
    server.get(config.api_version  + 'apps/:id', appController.findById);
    server.post(config.api_version  + 'apps', appController.save);
    server.put(config.api_version  + 'apps/:id', appController.update);
    server.delete(config.api_version  + 'apps/:id', appController.delete);
};
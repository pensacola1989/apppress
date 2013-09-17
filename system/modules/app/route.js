var config = require('../../../config');
var appController = require('./contrl');
var filter = require('../../../framework/filter');

exports = module.exports = function(server) {
    server.get(config.api_version  + 'apps', filter.authorize, appController.findAll);
    server.get(config.api_version  + 'apps/:id', filter.authorize, appController.findById);
    server.post(config.api_version  + 'apps', filter.authorize, appController.save);
    server.put(config.api_version  + 'apps/:id', filter.authorize, appController.update);
    server.delete(config.api_version  + 'apps/:id', filter.authorize, appController.delete);
};
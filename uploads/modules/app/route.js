var config = require('../../../config');
var appController = require('./contrl');

exports = module.exports = function(server) {
    server.get(config.api_version  + 'app', appController.findAll);
    server.get(config.api_version  + 'app/:id', appController.findById);
    server.post(config.api_version  + 'app', appController.save);
    server.put(config.api_version  + 'app/:id', appController.update);
    server.delete(config.api_version  + 'app/:id', appController.delete);
};
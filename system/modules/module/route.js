var config = require('../../../config');
var moduleController = require('./contrl');

exports = module.exports = function(server) {
    server.get(config.api_version  + 'modules', moduleController.findAll);
    server.get(config.api_version  + 'modules/:id', moduleController.findById);
    server.post(config.api_version  + 'modules', moduleController.save);
    server.put(config.api_version  + 'modules/:id', moduleController.update);
    server.delete(config.api_version  + 'modules/:id', moduleController.delete);
};
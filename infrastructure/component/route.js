var config = require('../../config');
var componentController = require('./contrl');

exports = module.exports = function(server) {
    server.get(config.api_version  + 'component', componentController.findAll);
    server.get(config.api_version  + 'component/:id', componentController.findById);
    server.post(config.api_version  + 'component', componentController.save);
    server.put(config.api_version  + 'component/:id', componentController.update);
    server.delete(config.api_version  + 'component/:id', componentController.delete);
};
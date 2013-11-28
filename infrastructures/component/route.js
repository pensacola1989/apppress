var config = require('../../config');
var componentController = require('./contrl');

exports = module.exports = function(server) {
    server.get(config.api_version  + 'components', componentController.findAll);
    server.get(config.api_version  + 'components/:id', componentController.findById);
    server.post(config.api_version  + 'components', componentController.save);
    server.put(config.api_version  + 'components/:id', componentController.update);
    server.delete(config.api_version  + 'components/:id', componentController.delete);
};
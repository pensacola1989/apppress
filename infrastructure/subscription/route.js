var config = require('../../config');
var subController = require('./contrl');

exports = module.exports = function(server) {
    server.get(config.api_version  + 'subscription', subController.findAll);
    server.get(config.api_version  + 'subscription/:id', subController.findById);
    server.post(config.api_version  + 'subscription', subController.save);
    server.put(config.api_version  + 'subscription/:id', subController.update);
    server.delete(config.api_version  + 'subscription/:id', subController.delete);

    server.get(config.api_version  + 'sub/list', subController.list);
    server.get(config.api_version  + 'sub/changeOrder', subController.changeOrder);
};
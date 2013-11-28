var config = require('../../config');
var subController = require('./contrl');

exports = module.exports = function(server) {
    server.get(config.api_version  + 'subscriptions', subController.findAll);
    server.get(config.api_version  + 'subscriptions/:id', subController.findById);
    server.post(config.api_version  + 'subscriptions', subController.save);
    server.put(config.api_version  + 'subscriptions/:id', subController.update);
    server.delete(config.api_version  + 'subscriptions/:id', subController.delete);

    server.get(config.api_version  + 'sub/list', subController.list);
    server.get(config.api_version  + 'sub/changeOrder', subController.changeOrder);
};
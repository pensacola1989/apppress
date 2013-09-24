var config = require('../../../../config');
var storeController = require('./contrl');

exports = module.exports = function(server) {
    server.get(config.api_version  + 'stores', storeController.findAll);
    server.get(config.api_version  + 'stores/:id', storeController.findById);
    server.post(config.api_version  + 'stores', storeController.save);
    server.put(config.api_version  + 'stores/:id', storeController.update);
    server.delete(config.api_version  + 'stores/:id', storeController.delete);

    server.get(config.api_version  + 'store/content', storeController.content);
};
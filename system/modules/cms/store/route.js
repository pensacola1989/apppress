var config = require('../../../../config');
var storeController = require('./contrl');
var filter = require('../../../../framework/filter');

exports = module.exports = function(server) {
    server.get(config.api_version  + 'mstores', filter.authorize, storeController.findAll);
    server.get(config.api_version  + 'mstores/:id', filter.authorize, storeController.findById);
    server.post(config.api_version  + 'mstores', filter.authorize, storeController.save);
    server.put(config.api_version  + 'mstores/:id', filter.authorize, storeController.update);
    server.delete(config.api_version  + 'mstores/:id', filter.authorize, storeController.delete);

    //server.get(config.api_version  + 'mstores/content', filter.authorize, storeController.content);
};
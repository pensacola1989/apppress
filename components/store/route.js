var config = require('../../config');
var storeController = require('./contrl');
var filter = require('../../framework/filter');

exports = module.exports = function(server) {
    server.get(config.api_version  + 'mstores', filter.authorize, storeController.findAll);
    server.get(config.api_version  + 'mstores/:id', filter.authorize, storeController.findById);
    server.post(config.api_version  + 'mstores', filter.authorize, storeController.save);
    server.put(config.api_version  + 'mstores/:id', filter.authorize, storeController.update);
    server.delete(config.api_version  + 'mstores/:id', filter.authorize, storeController.delete);

    server.get(config.api_version  + 'categories', filter.authorize, storeController.findCategories);
    server.post(config.api_version  + 'categories', filter.authorize, storeController.saveCategory);
    server.put(config.api_version  + 'categories/:id', filter.authorize, storeController.updateCategory);
    server.delete(config.api_version  + 'categories/:id', filter.authorize, storeController.deleteCategory);

    server.get(config.api_version  + 'products', filter.authorize, storeController.findProducts);
    server.post(config.api_version  + 'products', filter.authorize, storeController.saveProduct);
    server.put(config.api_version  + 'products/:id', filter.authorize, storeController.updateProduct);
    server.delete(config.api_version  + 'products/:id', filter.authorize, storeController.deleteProduct);
};
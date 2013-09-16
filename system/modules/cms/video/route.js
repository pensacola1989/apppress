var config = require('../../../../config');
var videoController = require('./contrl');

exports = module.exports = function(server) {
    server.get(config.api_version  + 'videos', videoController.findAll);
    server.get(config.api_version  + 'videos/:id', videoController.findById);
    server.post(config.api_version  + 'videos', videoController.save);
    server.put(config.api_version  + 'videos/:id', videoController.update);
    server.delete(config.api_version  + 'videos/:id', videoController.delete);
};
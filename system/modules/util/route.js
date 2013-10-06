var config = require('../../../config');
var utilController = require('./contrl');
var filter = require('../../../framework/filter');

exports = module.exports = function(server) {
    server.post(config.api_version  + 'upload', filter.authorize, utilController.upload);
};
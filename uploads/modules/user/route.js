var config = require('../../../config');
var userController = require('./contrl');

exports = module.exports = function(server) {
    server.post(config.api_version  + 'user/signonWithToken', userController.signonWithToken);
    server.post(config.api_version  + 'user/signup', userController.signup);
};
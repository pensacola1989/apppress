var config = require('../../../../config');
var couponController = require('./contrl');

exports = module.exports = function(server) {
    server.get(config.api_version  + 'coupons', couponController.findAll);
    server.get(config.api_version  + 'coupons/:id', couponController.findById);
    server.post(config.api_version  + 'coupons', couponController.save);
    server.put(config.api_version  + 'coupons/:id', couponController.update);
    server.delete(config.api_version  + 'coupons/:id', couponController.delete);
};
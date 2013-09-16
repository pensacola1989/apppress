var mongoose = require('../../../../framework/mongoose');

var Coupon = new mongoose.Schema({
    id: String,

    sn: String,
    name: String,
    descr: String,
    amount: String,
    type: String,

    status: Number,

    createTime: Date,
    expirationTime: Date
});
exports.Coupon = Coupon;




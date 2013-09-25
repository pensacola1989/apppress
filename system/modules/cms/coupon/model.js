var config = require('../../../../config');
var mongoose = require('../../../../framework/mongoose');

var couponSchema = new mongoose.Schema({
    sn: String,
    name: String,
    descr: String,
    amount: String,
    type: String,

    status: Number,

    createTime: Date,
    expirationTime: Date
}, config.schemaOptions);
couponSchema.virtual('id').get(function() {
    return this._id;
});
exports.Coupon = mongoose.model('Coupon', couponSchema);




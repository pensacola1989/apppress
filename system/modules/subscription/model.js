var config = require('../../../config');
var mongoose = require('../../../framework/mongoose');

var subscriptionSchema = new mongoose.Schema({
    moduleId: String,
    code: String,
    name: String,
    title: String,

    order: String,
    status: Number,

    createTime: Date,
    updateTime: Date,

    app: { type: mongoose.Schema.Types.ObjectId, ref: 'app' }
}, config.schemaOptions);
subscriptionSchema.virtual('id').get(function() {
    return this._id;
});
exports.Subscription = mongoose.model('app_subscription', subscriptionSchema);






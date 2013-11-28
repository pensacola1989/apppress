var config = require('../../config');
var mongoose = require('../../framework/mongoose');

var eventSchema = new mongoose.Schema({
    title: String,
    descr: String,
    date: Date,

    order: String,
    status: Number,

    createTime: Date,
    updateTime: Date,
    subscription: { type: mongoose.Schema.Types.ObjectId, ref: 'app_subscription' }
}, config.schemaOptions);
eventSchema.virtual('id').get(function() {
    return this._id;
});
exports.CmsEvent = mongoose.model('cms_event', eventSchema);




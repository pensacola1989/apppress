var config = require('../../config');
var mongoose = require('../../framework/mongoose');

var videoSchema = new mongoose.Schema({
    title: String,
    descr: String,
    url: Date,

    order: String,
    status: Number,

    createTime: Date,
    updateTime: Date
}, config.schemaOptions);
videoSchema.virtual('id').get(function() {
    return this._id;
});
exports.CmsVideo = mongoose.model('cms_video', videoSchema);




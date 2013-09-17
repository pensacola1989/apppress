var mongoose = require('../../../../framework/mongoose');

var videoSchema = new mongoose.Schema({
    id: String,

    title: String,
    descr: String,
    url: Date,

    order: String,
    status: Number,

    createTime: Date,
    updateTime: Date
});
exports.Video = mongoose.model('Video', videoSchema);




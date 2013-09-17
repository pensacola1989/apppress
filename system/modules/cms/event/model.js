var mongoose = require('../../../../framework/mongoose');

var eventSchema = new mongoose.Schema({
    id: String,

    title: String,
    descr: String,
    date: Date,

    order: String,
    status: Number,

    createTime: Date,
    updateTime: Date
});
exports.Event = mongoose.model('Event', eventSchema);




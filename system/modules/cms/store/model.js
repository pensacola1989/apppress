var mongoose = require('../../../../framework/mongoose');

var Store = new mongoose.Schema({
    id: String,

    name: String,
    descr: String,
    price: Number,
    freight: Number,
    flatRate: Boolean,

    order: String,
    status: Number,

    createTime: Date,
    updateTime: Date
});
exports.Store = Store;




var mongoose = require('../../../framework/mongoose');

var Keywords = new mongoose.Schema({
    keyword: String
});
exports.Keywords = Keywords;

var Product = new mongoose.Schema({
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
exports.Product = Product;




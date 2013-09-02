var mongoose = require('../../../framework/mongoose');

var Keywords = new mongoose.Schema({
    keyword: String
});
exports.Keywords = Keywords;

var App = new mongoose.Schema({
    title:String,
    author:String,
    releaseDate:Date,
    keywords: [Keywords]
});
exports.app = App;




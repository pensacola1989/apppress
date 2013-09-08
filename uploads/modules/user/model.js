var mongoose = require('../../../framework/mongoose');

var User = new mongoose.Schema({
    title:String,
    author:String,
    releaseDate:Date
});
exports.User = User;




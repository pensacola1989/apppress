var mongoose = require('../../../../framework/mongoose');

var photoSchema = new mongoose.Schema({
    path: String,
    descr: String
});
exports.Photo = mongoose.model('Photo', photoSchema);

var albumSchema = new mongoose.Schema({
    id: String,

    name: String,
    descr: String,
    price: Number,
    freight: Number,
    flatRate: Boolean,

    order: String,
    status: Number,

    createTime: Date,
    updateTime: Date,

    //photos: [photoSchema]
});
exports.Album = mongoose.model('Album', albumSchema);




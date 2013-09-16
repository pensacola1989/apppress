var mongoose = require('../../../../framework/mongoose');

var Photo = new mongoose.Schema({
    path: String,
    descr: String
});
exports.Photo = Photo;

var Album = new mongoose.Schema({
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

    photos: [Photo]
});
exports.Album = Album;




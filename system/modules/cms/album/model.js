var config = require('../../../../config');
var mongoose = require('../../../../framework/mongoose');

var photoSchema = new mongoose.Schema({
    path: String,
    descr: String
}, config.schemaOptions);
photoSchema.virtual('id').get(function() {
    return this._id;
});
exports.Photo = mongoose.model('Photo', photoSchema);

var albumSchema = new mongoose.Schema({
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
}, config.schemaOptions);
albumSchema.virtual('id').get(function() {
    return this._id;
});
exports.Album = mongoose.model('Album', albumSchema);




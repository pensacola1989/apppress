var config = require('../config');
var mongoose = require('./mongoose');

var pictureSchema = new mongoose.Schema({
    src: String,
    pid: String
}, config.schemaOptions);
pictureSchema.virtual('id').get(function() { return this._id; });
exports.CmmPicture = mongoose.model('cmm_picture', pictureSchema);

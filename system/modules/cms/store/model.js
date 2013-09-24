var mongoose = require('../../../../framework/mongoose');

var storeSchema = new mongoose.Schema({
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

    _sub: { type: mongoose.Schema.Types.ObjectId, ref: 'Subscription' }
});
exports.Store = mongoose.model('Store', storeSchema);;




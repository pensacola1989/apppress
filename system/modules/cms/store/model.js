var mongoose = require('../../../../framework/mongoose');

var storeSchema = new mongoose.Schema({
    id: String,

    _sub: { type: mongoose.Schema.Types.ObjectId, ref: 'Subscription' },
    _products : [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }]
});
exports.Store = mongoose.model('Store', storeSchema);

var productSchema = new mongoose.Schema({
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

    _store: { type: mongoose.Schema.Types.ObjectId, ref: 'Store' }
});
exports.Product = mongoose.model('Product', productSchema);




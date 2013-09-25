var config = require('../../../../config');
var mongoose = require('../../../../framework/mongoose');

var storeSchema = new mongoose.Schema({
    _sub: { type: mongoose.Schema.Types.ObjectId, ref: 'Subscription' },
    _products : [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }]
}, config.schemaOptions);
storeSchema.virtual('id').get(function() {
    return this._id;
});
exports.Store = mongoose.model('Store', storeSchema);

var productSchema = new mongoose.Schema({
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
}, config.schemaOptions);
productSchema.virtual('id').get(function() {
    return this._id;
});
exports.Product = mongoose.model('Product', productSchema);




var config = require('../../../../config');
var mongoose = require('../../../../framework/mongoose');

var storeSchema = new mongoose.Schema({
    _sub: { type: mongoose.Schema.Types.ObjectId, ref: 'app_subscription' },
    _categories : [{ type: mongoose.Schema.Types.ObjectId, ref: 'cms_store_category' }]
}, config.schemaOptions);
storeSchema.virtual('id').get(function() { return this._id; });
exports.CmsStore = mongoose.model('cms_store', storeSchema);

var storeCategorySchema = new mongoose.Schema({
    _store: { type: mongoose.Schema.Types.ObjectId, ref: 'cms_store' },
    _products : [{ type: mongoose.Schema.Types.ObjectId, ref: 'cms_store_product' }]
}, config.schemaOptions);
storeCategorySchema.virtual('id').get(function() { return this._id; });
exports.CmsStoreCategory = mongoose.model('cms_store_category', storeCategorySchema);

var storeProductSchema = new mongoose.Schema({
    name: String,
    descr: String,
    price: Number,
    freight: Number,
    flatRate: Boolean,

    order: String,
    status: Number,

    createTime: Date,
    updateTime: Date,

    _category: { type: mongoose.Schema.Types.ObjectId, ref: 'cms_store_category' }
}, config.schemaOptions);
storeProductSchema.virtual('id').get(function() { return this._id; });
exports.CmsStoreProduct = mongoose.model('cms_store_product', storeProductSchema);




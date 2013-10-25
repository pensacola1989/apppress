var config = require('../../../../config');
var mongoose = require('../../../../framework/mongoose');

var storeSchema = new mongoose.Schema({
    subscription: { type: mongoose.Schema.Types.ObjectId, ref: 'app_subscription' },
    categories : [{ type: mongoose.Schema.Types.ObjectId, ref: 'cms_store_category' }]
}, config.schemaOptions);
storeSchema.virtual('id').get(function() { return this._id; });
exports.CmsStore = mongoose.model('cms_store', storeSchema);

var storeCategorySchema = new mongoose.Schema({
    name: String,
    picture: String,
    mstore: { type: mongoose.Schema.Types.ObjectId, ref: 'cms_store' },
    products : [{ type: mongoose.Schema.Types.ObjectId, ref: 'cms_store_product' }]
}, config.schemaOptions);
storeCategorySchema.virtual('id').get(function() { return this._id; });
exports.CmsStoreCategory = mongoose.model('cms_store_category', storeCategorySchema);

var storeProductSchema = new mongoose.Schema({
    name: String,
    descr: String,
    price: Number,
    freight: Number,
    flatRate: Boolean,
    thumb: String,

    order: String,
    status: Number,

    createTime: Date,
    updateTime: Date,

    category: { type: mongoose.Schema.Types.ObjectId, ref: 'cms_store_category' },
    pictures: [{ type: mongoose.Schema.Types.ObjectId, ref: 'cmm_picture' }]
}, config.schemaOptions);
storeProductSchema.virtual('id').get(function() { return this._id; });
exports.CmsStoreProduct = mongoose.model('cms_store_product', storeProductSchema);




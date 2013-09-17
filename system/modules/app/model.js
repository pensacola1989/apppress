var mongoose = require('../../../framework/mongoose');

var appSchema = new mongoose.Schema({
    id: String,
    name:String,
    descr:String,
    status:Number,

    createTime:Date,
    updateTime:Date,

    _subs : [{ type: mongoose.Schema.Types.ObjectId, ref: 'Subscription' }]
});
exports.App = mongoose.model('App', appSchema);






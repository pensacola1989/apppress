var attr = DS.attr,
    hasMany = DS.hasMany,
    belongsTo = DS.belongsTo;

Admin.Category = DS.Model.extend({
    name: attr(),
    mstore: belongsTo('mstore'),
    products: hasMany('product'),

    didLoad: function() {

    }
});
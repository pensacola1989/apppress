var attr = DS.attr,
    hasMany = DS.hasMany,
    belongsTo = DS.belongsTo;

Client.Category = DS.Model.extend({
    name: attr(),
    picture: attr(),
    mstore: belongsTo('mstore'),
    //products: hasMany('product'),

    didLoad: function() {

    }
});
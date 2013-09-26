var attr = DS.attr,
    hasMany = DS.hasMany,
    belongsTo = DS.belongsTo;

Admin.Mstore = DS.Model.extend({
    subscription: belongsTo('subscription'),
    categories: hasMany('category'),

    didLoad: function() {

    }
});
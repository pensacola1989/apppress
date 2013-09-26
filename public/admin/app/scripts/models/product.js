var attr = DS.attr,
    hasMany = DS.hasMany,
    belongsTo = DS.belongsTo;

Admin.Product = DS.Model.extend({
    category: belongsTo('category'),

    didLoad: function() {

    }
});
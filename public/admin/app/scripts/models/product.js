var attr = DS.attr,
    hasMany = DS.hasMany,
    belongsTo = DS.belongsTo;

Admin.Product = DS.Model.extend({
    name: attr(),
    descr: attr(),
    price: attr(),
    freight: attr(),
    flatRate: attr(),

    order: attr(),
    status: attr(),

    createTime: attr(),
    updateTime: attr(),

    category: belongsTo('category'),

    didLoad: function() {

    }
});

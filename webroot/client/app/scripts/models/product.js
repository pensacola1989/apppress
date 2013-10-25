var attr = DS.attr,
    hasMany = DS.hasMany,
    belongsTo = DS.belongsTo;

Client.Product = DS.Model.extend({
    name: attr(),
    descr: attr(),
    price: attr(),
    freight: attr(),
    flatRate: attr(),
    thumb: attr(),

    order: attr(),
    status: attr(),

    createTime: attr(),
    updateTime: attr(),

    category: belongsTo('category'),
    pictures: hasMany('picture'),
    pictureStr: attr(),

    didLoad: function() {

    }
});


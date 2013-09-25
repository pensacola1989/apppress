var attr = DS.attr,
    hasMany = DS.hasMany,
    belongsTo = DS.belongsTo;

Admin.Subscription = DS.Model.extend({
    code: attr(),
    name: attr(),
    title: attr(),
    order: attr(),

    createTime: attr(),
    updateTime: attr(),

    didLoad: function() {

    }
});
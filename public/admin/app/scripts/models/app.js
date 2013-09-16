var attr = DS.attr,
    hasMany = DS.hasMany,
    belongsTo = DS.belongsTo;

Admin.App = DS.Model.extend({
    name: attr(),
    descr: attr(),
    createTime: attr(),
    updateTime: attr(),
    subscriptions: DS.hasMany('Subscription')
});
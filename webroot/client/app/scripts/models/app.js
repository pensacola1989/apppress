var attr = DS.attr,
    hasMany = DS.hasMany,
    belongsTo = DS.belongsTo;

Client.App = DS.Model.extend({
    name: attr(),
    descr: attr(),
    createTime: attr(),
    updateTime: attr(),

    //subscriptions: hasMany('subscription'),

    userId: attr()
});
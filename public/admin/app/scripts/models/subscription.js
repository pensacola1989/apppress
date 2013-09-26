var attr = DS.attr,
    hasMany = DS.hasMany,
    belongsTo = DS.belongsTo;

Admin.Subscription = DS.Model.extend({
    code: attr(),
    moduleId: attr(),

    name: attr(),
    title: attr(),
    order: attr(),

    createTime: attr(),
    updateTime: attr(),

    app: belongsTo('app'),

    didLoad: function() {

    }
});
var attr = DS.attr,
    hasMany = DS.hasMany,
    belongsTo = DS.belongsTo;

Admin.Module = DS.Model.extend({
    code: attr(),
    name: attr(),
    title: attr(),

    createTime: attr(),
    updateTime: attr()
});
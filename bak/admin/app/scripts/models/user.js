var attr = DS.attr,
    hasMany = DS.hasMany,
    belongsTo = DS.belongsTo;

Admin.User = DS.Model.extend({
    email:attr(),
    passwd:attr(),
    token:attr(),
    phone:attr(),
    im:attr(),
    status:attr(),
    createTime:attr(),
    updateTime:attr()
});
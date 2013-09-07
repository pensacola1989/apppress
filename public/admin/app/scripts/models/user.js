var attr = DS.attr,
    hasMany = DS.hasMany,
    belongsTo = DS.belongsTo;

Admin.User = DS.Model.extend({
    title: attr(),
    author: attr(),
    releaseDate: attr()
});
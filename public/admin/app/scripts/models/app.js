var attr = DS.attr,
    hasMany = DS.hasMany,
    belongsTo = DS.belongsTo;

Admin.App = DS.Model.extend({
    title: attr(),
    author: attr(),
    releaseDate: attr()
});
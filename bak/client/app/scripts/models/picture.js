var attr = DS.attr,
    hasMany = DS.hasMany,
    belongsTo = DS.belongsTo;

Client.Picture = DS.Model.extend({
    src: attr()
});


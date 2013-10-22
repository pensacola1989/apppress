var attr = DS.attr,
    hasMany = DS.hasMany,
    belongsTo = DS.belongsTo;

Client.App = DS.Model.extend({
    name: attr(),
    descr: attr(),
    createTime: attr(),
    updateTime: attr(),

    userId: attr(),

    subscriptions: hasMany('subscription'),
    sortedSubscriptions: function () {
        var items = this.get('subscriptions').toArray();
        return items.sort(function (lhs, rhs) {
            return lhs.get('order') - rhs.get('order');
        });
    }.property('subscriptions.@each.isLoaded')

});
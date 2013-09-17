exports.addId = function (list) {
    for (var i = 0; i < list.length; i++) {
        list[i].set('id', list[i].get('_id'));
    }
}
var isEmpty = function (v) {
    if (v === undefined || v === null || v === '') {
        return true;
    }
    return false;
};
var isNotEmpty = function (v) {
    return !isEmpty(v);
};
exports.isEmpty = isEmpty;
exports.isNotEmpty = isNotEmpty;

exports.addId = function (list) {
    if (isEmpty(list)) {
        return;
    }
    for (var i = 0; i < list.length; i++) {
        if (isEmpty(list[i])) {
            continue;
        }

        list[i].set('id', list[i].get('_id'));

    }
}
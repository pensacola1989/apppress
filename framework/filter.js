exports.authorize = function(req, res, next) {
    console.log('' + req.session.user + '');

    if (!req.session || !req.session.user) {
        req.statusCode = 500;
        res.send({code: 'NOT_SIGNON', data: {}});
    } else {
        next();
    }
}
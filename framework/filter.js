exports.authorize = function(req, res, next) {
    if (!req.session || !req.session.user) {
        console.log('======NOT SIGNON ERROR======');

        res.statusCode = 555;
        res.send({code: 'NOT_SIGNON', data: {}});
    } else {
        next();
    }
}
exports.authorize = function(req, res, next) {
    //console.log(req.session);
    if (!req.session || !req.session.user) {
        next();

//        console.log('======NOT SIGNON ERROR======');
//
//        res.statusCode = 555;
//        res.send({code: 'NOT_SIGNON', data: {}});
    } else {
        next();
    }
}
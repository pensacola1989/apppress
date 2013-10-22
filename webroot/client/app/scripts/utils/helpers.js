var toString = Object.prototype.toString,
    functionType = '[object Function]',
    objectType = '[object Object]';

Handlebars.registerHelper('vari', function(v) {
	if (Util.isEmpty(v))
		return "";

    /*jshint -W061 */
    var value = eval('Vari.' + v);
	return new Handlebars.SafeString(value);
});

Handlebars.registerHelper('reqPath', function(uri) {
    if (Util.isEmpty(uri))
        return new Handlebars.SafeString(Vari.ApiPath);
    var url = Vari.ApiPath + uri;

    return new Handlebars.SafeString(url);
});
Handlebars.registerHelper('vari', function(v) {
	if (Util.isEmpty(v))
		return "";

	//alert(Vari.UserEmail);

	return new Handlebars.SafeString("");
});

Handlebars.registerHelper('fullPath', function(rt, uri, rpl) {
	var me = this;
	var root = "";
	if (rt == "web") {
		root = Custant.WebRoot;
	} else if (rt == "crt") {
		root = Util.getIndexPath();
	}
	
	if (Util.isEmpty(uri))
		return new Handlebars.SafeString(root);
	
	if (uri.indexOf("content.") > -1) {
		uri = Ember.get(this, uri);
	}
	
	var url = "";
	if (Util.isNotEmpty(rpl)) {
		console.log();
		if (rpl.indexOf("content.") > -1) {
			rpl = Ember.get(me, rpl);
		}		
		url = root + uri.replace("@1", rpl);
	} else {
		url = root + uri;
	}

	return new Handlebars.SafeString(url);
});
Handlebars.registerHelper('displayPath', function(formId) {
	var me = this;
	formId = Ember.get(this, formId);
			
	var url = Vari.DisplayPath.replace("$formId$", formId);
	return new Handlebars.SafeString(url);
});
Handlebars.registerHelper('sessionPath', function(appId) {
	var me = this;
	appId = Ember.get(this, appId);
			
	var url = Vari.SessionPath.replace("$appId$", appId);
	return new Handlebars.SafeString(url);
});

Handlebars.registerHelper('reqPath', function(uri) {
	if (Util.isEmpty(uri))
		return new Handlebars.SafeString(Vari.ApiRestV1);
	var url = Vari.ApiRestV1 + uri;

	return new Handlebars.SafeString(url);
});

Handlebars.registerHelper('compare', function(lvalue, rvalue, options) {
	
	if (arguments.length < 3)
		throw new Error("Handlerbars Helper 'compare' needs 2 parameters");
	
	operator = options.hash.operator || "==";
	constant = options.hash.constant || true;
	
	lvalue = Ember.get(this, lvalue);
	if (operator != 'typeof') {
		if (!constant)
			rvalue = Ember.get(this, rvalue);
	}

	var operators = {
		'==' : function(l, r) {
			return l == r;
		},
		'===' : function(l, r) {
			return l === r;
		},
		'!=' : function(l, r) {
			return l != r;
		},
		'<' : function(l, r) {
			return l < r;
		},
		'>' : function(l, r) {
			return l > r;
		},
		'<=' : function(l, r) {
			return l <= r;
		},
		'>=' : function(l, r) {
			return l >= r;
		},
		'typeof' : function(l, r) {
			return typeof l == r;
		}
	};

	if (!operators[operator])
		throw new Error(
				"Handlerbars Helper 'compare' doesn't know the operator "
						+ operator);

	var result = operators[operator](lvalue, rvalue);
	//alert(lvalue + "," + rvalue);
	if (result) {
		
		return options.fn(this);
	} else {
		return options.inverse(this);
	}
});
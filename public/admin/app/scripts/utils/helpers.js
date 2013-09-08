Handlebars.registerHelper('vari', function(v) {
	if (Util.isEmpty(v))
		return "";

	//alert(Vari.UserEmail);

	return new Handlebars.SafeString("");
});

Handlebars.registerHelper('reqPath', function(uri) {
	if (Util.isEmpty(uri))
		return new Handlebars.SafeString(Vari.ApiPath);
	var url = Vari.ApiPath + uri;

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
Handlebars.registerHelper('vari', function(v) {
	if (Util.isEmpty(v))
		return "";

    var value = eval('Vari.' + v);

	//alert(value);

	return new Handlebars.SafeString(value);
});

Handlebars.registerHelper('first', function(context, block) {
    return context[0];
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

Handlebars.registerHelper("breadcrumb",function(arr, options) {
    arr = Ember.get(this, arr);
    var html = '<ul class="breadcrumb">';
    for (var i = 0; i < arr.length; i++) {
        var item = arr[i];
         if (i === arr.length -1) {
             html += '<li class="active">' + item.label + '</li>';
         } else {
             html += '<li><a href="#">' + item.label + '</a> <span class="divider">/</span></li>';
         }
    }
    html += '</ul>';

    return new Handlebars.SafeString(html);
});
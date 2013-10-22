(function() {

window.Admin = Ember.Application.create();

})();

(function() {

AccountUtil = {
    signonWithToken: function() {
        var token = $.cookie(Vari.TokenName);
        if (Util.isEmpty(token)) {
            //route.transitionTo("user.signon");
            location.href="#/user/signon";
        } else {
            $.ajax({
                type : 'POST',
                dataType : 'json',
                //contentType: "application/json",
                async : false,
                url : Vari.ApiPath + 'user/signonWithToken',
                data : {
                    token: token
                },
                success : function(json) {
                    if (json.success) {
                        console.log("success to signonWithToken");

                        $.cookie(Vari.TokenName, json.data.token);

                        Vari.CurrUser = json.data;

                        if (location.href.indexOf("apps") > -1) {
                            location.reload();
                        } else {
                            location.href="#/apps";
                        }
                    } else {
                        $.removeCookie(Vari.TokenName);
                        location.href="#/user/signon";
                    }
                }
            });
        }
    }
};

})();

(function() {

CmsUtil = {
    clearContentView: function (){
        /*jshint -W069 */
        var parentView = Em.View.views['cms_content_view'];
        parentView.get('childViews').forEach(function(item) {
            item.remove();
        });
        parentView.removeAllChildren();
    },

    createCmsMenu: function (items){
        $('#cms-menu').jcarousel({
            size: items.length,
            scroll: 5,
            visible: 5,
            itemLoadCallback: function (carousel, state) {
                for (var i = carousel.first; i <= carousel.last; i++) {
                    if (carousel.has(i)) {
                        continue;
                    }

                    if (i > items.length) {
                        break;
                    }
                    var cls = items[i-1].status===0? 'forbidden':'';
                    carousel.add(i,
                        [
                            '<li id="jcarousel-item-' + items[i-1].id + '" class="' + cls + '" data-id="' + items[i-1].id + '" data-code="' + items[i-1].code + '">',
                                '<div class="jcarousel-item-container">',
                                    '<div><img src="images/icons/white/' + items[i-1].code + '.png" height=30 width=30></div>',
                                    '<div>' + items[i-1].title + '</div>',
                                '</div>',
                                '<div class="jcarousel-item-move"></div>',
                            '</li>'
                        ].join('')
                    );
                }
                carousel.size(items.length);
            }
        });
        $(".jcarousel-container").delegate('li.jcarousel-item', 'mouseover', function(e){
            if(!$(this).hasClass("forbidden")){
                $(this).find('.jcarousel-item-move').css("display", "block");
            }
        });
        $(".jcarousel-container").delegate('li.jcarousel-item','mouseout',function(e){
            if(!$(this).hasClass("forbidden")){
                $(this).find('.jcarousel-item-move').css("display", "none");
            }
        });

        var menuItems = $('ul.jcarousel-list');
        menuItems.sortable({
            items: 'li.jcarousel-item',
            axis: 'x',
            placeholder: 'ui-state-highlight' ,
            revert: true,
            scroll: true,
            tolerance: 'pointer',
            cursor: 'move',
            opacity: 0.9,
            //scrollSpeed:10 ,
            //scrollSensitivity: 10 ,
            //distance: 30,
            stop: function(event, ui){
                var newIds = [];
                $('ul.jcarousel-list li.jcarousel-item').each(function() {
                    newIds.push( $(this).attr("id").replace('jcarousel-item-', '') );
                });
                var idStr = newIds.join(',');
                try {
                    $.ajax({
                        type : 'GET',
                        dataType : 'json',
                        url : Vari.ApiPath + 'sub/changeOrder',
                        data: {newIds: idStr},

                        success : function(json, textStatus) {
                            //console.log('Success to change order!!!');
                        }
                    });
                } catch(err) {
                    console.log(err.name + ': ' + err.message);
                    menuItems.sortable( "cancel" );
                }
            }
        });
        menuItems.disableSelection();
    },
    showCmsNav: function(arr) {
        /*jshint -W069 */
        var view = Em.View.views['cms_nav_view'];
        view.set("context", arr);
    },
    showCmsContent: function(view, content, context) {
        CmsUtil.clearContentView();
        /*jshint -W069 */
        var parentView = Em.View.views['cms_content_view'];
        parentView.pushObject(view);
    }

};

})();

(function() {

Code = {
    NotSignon: 'NOT_SIGNON'
};

})();

(function() {

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

Handlebars.registerHelper('compare', function(lvalue, rvalue, options) {
	
	if (arguments.length < 3)
		throw new Error("Handlerbars Helper 'compare' needs 2 parameters");
	
	operator = options.hash.operator || "==";
	constant = options.hash.constant || true;
	
	lvalue = Ember.get(this, lvalue);
	if (operator !== 'typeof') {
		if (!constant)
			rvalue = Ember.get(this, rvalue);
	}

	var operators = {
		'==' : function(l, r) {
			return l === r;
		},
		'===' : function(l, r) {
			return l === r;
		},
		'!=' : function(l, r) {
			return l !== r;
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
			return typeof l === r;
		}
	};

	if (!operators[operator])
		throw new Error(
				"Handlerbars Helper 'compare' doesn't know the operator " + operator);

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



})();

(function() {

Custant = {
    ApiVer: 'v1',
    WebRoot: 'N/A',
    ClientRoot: 'N/A'
};
if (location.href.indexOf("192.168") > -1) {
    Custant.WebRoot = "http://192.168.1.228:9000/";
    if (location.href.indexOf("dist") > -1) {   // build testing
        Custant.ClientRoot = Custant.WebRoot + "dist/client/";
    } else {    // develop
        Custant.ClientRoot = Custant.WebRoot + "client/app/";
    }
} else {    // production
    Custant.WebRoot = "http://56.io/";
    Custant.ClientRoot = Custant.WebRoot + "client/";
}

Vari = {
    ApiPath: Custant.WebRoot + "api/" + Custant.ApiVer + "/",
	
	TokenName: "apppress.token",
	CurrUser: {id: null},

    CurrApp: null,
    CurrSub: null,
    CurrSubId: null,

	CurrAction: null,
	DragType: null,
	srcId: null
};

Util = {
	isEmpty: function (o){
		if (o === null || o === "null" || o === undefined || o === "undefined" || o === "") {
			return true;
		} else {
			return false;
		}
	},
	isNotEmpty: function (o){
		return !Util.isEmpty(o);
	},
	handleInput: function (){
		return false;
	},
	getUrlParam: function(pname) {
		var rt = '';
        var url = unescape(window.location.href);
        url = url.split('#')[0];
        
        var allArgs = url.split("?")[1];
        if (!allArgs) {
            return '';
        }
        var args = allArgs.split("&");
        for(var i=0; i<args.length; i++) {
            var arg = args[i].split("=");
            if (arg[0] === pname) {
                rt = arg[1];
                return rt;
            }          
        }
        return rt;
	},
	addHeadLink : function(rel, href) {
		var head = document.getElementsByTagName("head")[0];
		
        var link = document.createElement('link');
        link.setAttribute('rel', rel);
        link.setAttribute('href', href);

        head.appendChild(link);
    },
	removeHeadLink: function(rel, href) {			
		var links=document.getElementsByTagName('link');
		for (var i=0; i<links.length; i++) {
			//console.log(links[i].rel+ ', ' + links[i].href);				
			if ( links[i].rel === rel &&
					links[i].href.indexOf(href) > -1) {
				links[i].parentNode.removeChild(links[i]);
			}
		}
	},
	getIndexPath: function() {
		var arr = location.href.split("?");
		delete arr[arr.length-1];
		var dir = arr.join("");
		return dir;
	},
	getDocSize: function() {
		var sh = window.screen.height;
		if (document.body.clientHeight > sh) {
			sh = document.body.clientHeight;
		}
		
		var sw = window.screen.width;
		if (document.body.clientWidth > sw) {
			sw = document.body.clientWidth;
		}
		return {h: sh, w:sw};
	},
	
	capFirstLetter: function (word){
		var w = word.substring(0,1).toUpperCase() + word.substring(1);
		return w;
	},
	lowFirstLetter: function (word){
		var w = word.substring(0,1).toLowerCase() + word.substring(1);
		return w;
	}
};


})();

(function() {



})();

(function() {

Admin.CmsStoreController = Em.ArrayController.extend({
    needs: ['app', 'cms'],

    actions: {
        createCategory: function(mstore) {
            var me =this;

            var newCategory = me.store.createRecord('category', {
                name: '',
                mstore: mstore
            });
            CmsUtil.clearContentView();
            var childView = Admin.StoreCategoryEditView.create({
                controller: me,
                context: newCategory
            });
            CmsUtil.showCmsContent(childView);
            CmsUtil.showCmsNav([{label: 'categories'}, {label: 'create'}]);

        },
        editCategory: function(category) {
            var me =this;

            var childView = Admin.StoreCategoryEditView.create({
                controller: me,
                context: category
            });
            CmsUtil.showCmsContent(childView);
            CmsUtil.showCmsNav([{label: 'categories'}, {label: 'edit'}]);
        },
        saveCategory: function(category) {
            var me = this;

            var form = $('#categoryEditForm');
            form.validate();
            if (!form.valid()) return;

            category.one("didCreate", this, function() {
                me.showContent();
            });
            category.one("didUpdate", this, function() {
                me.showContent();
            });
            category.save();
        },
        deleteCategory: function(category) {
            var me = this;
            var subId = category.get('mstore').get('id');
            category.one("didDelete", this, function() {
                me.showContent();
            });
            me.store.deleteRecord(category);
            category.save();
        },
        showProductList: function(category) {
            this.showProductList(category);
        },
        createProduct: function(category) {
            var me =this;

            var newProduct = me.store.createRecord('product', {
                name: 'pp',
                category: category
            });
            CmsUtil.clearContentView();
            var childView = Admin.StoreProductEditView.create({
                controller: me,
                context: newProduct
            });
            CmsUtil.showCmsContent(childView);
            CmsUtil.showCmsNav([{label: 'categories'}, {label: 'products'}, {label: 'create'}]);

        },
        editProduct: function(product) {
            var me =this;

            var childView = Admin.StoreProductEditView.create({
                controller: me,
                context: product
            });
            CmsUtil.showCmsContent(childView);
            CmsUtil.showCmsNav([{label: 'categories'}, {label: 'products'}, {label: 'edit'}]);
        },
        saveProduct: function(product) {
            var me = this;
            jQuery.validator.setDefaults({
                debug: true,
                success: "valid"
            });
            var form = $('#productEditForm');
            form.validate();
            if (!form.valid()) return;

            if (product.get('pictures').get('length') <= 0) {
                alert('Please at lease upload one picture.');
                return;
            }

            var str = '';

            product.get('pictures').forEach(function(item) {
                if (Util.isNotEmpty(str))  str += ',';
                str += item.get('src');
            });
            product.set('pictureStr', str);

            var category = product.get('category');

            product.one("didCreate", this, function() {
                me.showProductList(category);
            });
            product.one("didUpdate", this, function() {
                me.showProductList(category);
            });
            product.save();
        },
        deleteProduct: function(product) {
            var me = this;
            var category = product.get('category');
            product.one("didDelete", this, function() {
                me.showProductList(category);
            });
            me.store.deleteRecord(product);
            product.save();
        }
    },

    // called by the sub menu
    showContent: function() {
        CmsUtil.clearContentView();

        var me = this;
        me.store.find('mstore', {subscriptionId: Vari.CurrSubId}).then(function(mstores) {
            var mstore = mstores.get('content')[0];
            me.store.find('category', {mstoreId: mstore.get('id')}).then(function(categories) {
                var childView = Admin.StoreCategoryListView.create({
                    controller: me,
                    context: {store: mstore, categories: categories}
                });
                CmsUtil.showCmsContent(childView);
                CmsUtil.showCmsNav([{label: 'categories'}]);
            });
        });
    },
    showProductList: function(category) {
        var me =this;
        me.store.find('product', {categoryId: category.id}).then(function(products) {

            var childView = Admin.StoreProductListView.create({
                controller: me,
                context: {category: category, products: products}
            });
            CmsUtil.showCmsContent(childView);
            CmsUtil.showCmsNav([{label: 'categories'}, {label: 'products'}]);
        });
    }
});



})();

(function() {

Admin.AppsController = Em.Controller.extend({
    actions: {
        createApp: function() {
            var newApp = this.store.createRecord('app', {
                name: '',
                descr: ''
            });
            this.transitionToRoute("app.edit", newApp);
        },
        editApp: function(app) {
            this.transitionToRoute("app.edit", app);
        },
        modifyApp: function(app) {
            this.transitionToRoute("cms", app);
        },
        deleteApp: function(app) {
            app.one("didDelete", this, function() {
                var list = this.store.find('app');
                this.set('model', list);
            });
            this.store.deleteRecord(app);
            app.save();
        }
    }
});

Admin.AppController = Em.ObjectController.extend({

});

Admin.AppEditController = Em.Controller.extend({
    needs: "app",
    app: Ember.computed.alias("controllers.app"),
    actions: {
        saveApp: function(app) {
            var me = this;

            var form = $('#appEditForm');
            form.validate();
            if (!form.valid()) return;

            app.one("didCreate", this, function() {
                me.transitionToRoute("apps");
            });
            app.one("didUpdate", this, function() {
                me.transitionToRoute("apps");
            });
            app.save();
        }
    }
});





})();

(function() {

Admin.CmsController = Em.ArrayController.extend({
    needs: ['app','cmsStore'],
    actions: {

    },
    createCmsMenuAndPreview: function(subId, subCode) {
        var me = this;
        var appController = me.get('controllers.app');

        var app = appController.get('content');
        var appId = app.get('id');

        $.ajax({
            type : 'GET',
            dataType : 'json',
            url : Vari.ApiPath + 'sub/list',
            data: {appId: appId},

            success : function(items, textStatus) {
                CmsUtil.createCmsMenu(items);
                $(".jcarousel-container").delegate('li.jcarousel-item','click',function(e){
                    if(!$(this).hasClass("forbidden")){
                        $('li.jcarousel-item').removeClass('active');
                        $(this).addClass('active');

                        CmsUtil.clearContentView();
                        me.showCmsContent($(this).attr('data-id'), $(this).attr('data-code'));
                    }
                });

                $('#previewFrame').attr('src', Custant.ClientRoot);
            }
        });
    },
    showCmsContent: function(subId, subCode) {
        var me = this;
        Vari.CurrSubId = subId;
        me.get('controllers.cms' + Util.capFirstLetter(subCode)).showContent();
    }
});


})();

(function() {

Admin.UserController = Em.ObjectController.extend({
    signon: function() {
        var me = this;
        var p = $('#signonForm').validate().form();
        if (!p) return;

        $("#signonForm").ajaxSubmit(function(json) {
            if (json.success) {
                if (Util.isNotEmpty(json.data.token)) {
                    $.cookie(Vari.TokenName, json.data.token);
                } else {
                    $.removeCookie(Vari.TokenName);
                }

                Vari.CurrUser = json.data;
                me.transitionToRoute("apps");
            } else {
                $.removeCookie(Vari.TokenName);
            }
        });
        return false;
    },
    guestSignon: function() {
        var me = this;
        $.ajax({
            async : false,
            url : Vari.ApiRestV1 + 'user/signon',
            data : {
                email: "guest@palm.io",
                password: "pass",
                rememberMe: "on"
            },

            success : function(json) {
                if (json.success) {
                    if (Util.isNotEmpty(json.token)) {
                        $.cookie(Vari.TokenName, json.token);
                    } else {
                        $.removeCookie(Vari.TokenName);
                    }
                    Vari.CurrUser = json.data;
                    me.transitionToRoute("apps");
                } else {
                    $.removeCookie(Vari.TokenName);
                }
            }
        });
        return false;
    },
    signup: function(form) {
        var me = this;
        var p = $('#signupForm').validate({
            rules: {
                confirmPassword: {
                    equalTo: "#inputPassword"
                }
            }
        }).form();
        if (!p) return;

        $(".error").html('');
        $(".error").removeClass("error");
        $("#signupForm").ajaxSubmit(function(json) {

            if (json.success) {
                if (Util.isNotEmpty(json.token)) {
                    $.cookie(Vari.TokenName, json.token);
                } else {
                    $.removeCookie(Vari.TokenName);
                }
                Vari.CurrUser = json.data;
                //alertify.log("Success to signup!", "", 2000);
                //alertify.alert('<span class="my-success">' + 'Success to signup!' + '</span>');
                me.transitionToRoute("apps");
            } else {
                $.removeCookie(Vari.TokenName);
                alertify.alert('<span class="my-error">' + json.code + '</span>');
            }
        });
        return false;
    }
});


})();

(function() {



})();

(function() {




})();

(function() {



})();

(function() {

var attr = DS.attr,
    hasMany = DS.hasMany,
    belongsTo = DS.belongsTo;

Admin.App = DS.Model.extend({
    name: attr(),
    descr: attr(),
    createTime: attr(),
    updateTime: attr(),

    //subscriptions: hasMany('subscription'),

    userId: attr()
});

})();

(function() {

var attr = DS.attr,
    hasMany = DS.hasMany,
    belongsTo = DS.belongsTo;

Admin.Category = DS.Model.extend({
    name: attr(),
    mstore: belongsTo('mstore'),
    //products: hasMany('product'),

    didLoad: function() {

    }
});

})();

(function() {

var attr = DS.attr,
    hasMany = DS.hasMany,
    belongsTo = DS.belongsTo;

Admin.Module = DS.Model.extend({
    code: attr(),
    name: attr(),
    title: attr(),

    createTime: attr(),
    updateTime: attr()
});

})();

(function() {

var attr = DS.attr,
    hasMany = DS.hasMany,
    belongsTo = DS.belongsTo;

Admin.Picture = DS.Model.extend({
    src: attr()
});



})();

(function() {

var attr = DS.attr,
    hasMany = DS.hasMany,
    belongsTo = DS.belongsTo;

Admin.Product = DS.Model.extend({
    name: attr(),
    descr: attr(),
    price: attr(),
    freight: attr(),
    flatRate: attr(),
    thumb: attr(),

    order: attr(),
    status: attr(),

    createTime: attr(),
    updateTime: attr(),

    category: belongsTo('category'),
    pictures: hasMany('picture'),
    pictureStr: attr(),

    didLoad: function() {

    }
});



})();

(function() {

var attr = DS.attr,
    hasMany = DS.hasMany,
    belongsTo = DS.belongsTo;

Admin.Mstore = DS.Model.extend({
    subscription: belongsTo('subscription'),
    //categories: hasMany('category'),

    didLoad: function() {

    }
});

})();

(function() {

var attr = DS.attr,
    hasMany = DS.hasMany,
    belongsTo = DS.belongsTo;

Admin.Subscription = DS.Model.extend({
    code: attr(),
    moduleId: attr(),

    name: attr(),
    title: attr(),
    order: attr(),

    createTime: attr(),
    updateTime: attr(),

    app: belongsTo('app'),

    didLoad: function() {

    }
});

})();

(function() {

var attr = DS.attr,
    hasMany = DS.hasMany,
    belongsTo = DS.belongsTo;

Admin.User = DS.Model.extend({
    email:attr(),
    passwd:attr(),
    token:attr(),
    phone:attr(),
    im:attr(),
    status:attr(),
    createTime:attr(),
    updateTime:attr()
});

})();

(function() {



})();

(function() {

Admin.AppsView = Em.View.extend({
    templateName: 'app/apps',
    didInsertElement: function() {

    },

    handler: function() {
    }.observes('controller.content.isLoaded')
});

Admin.AppView = Em.View.extend({
    templateName: 'app/main',
    didInsertElement: function() {

    }
});

Admin.AppEditView = Em.View.extend({
    templateName: 'app/edit',
    didInsertElement: function() {

    }
});

})();

(function() {

Admin.ApplicationView = Em.View.extend({
    templateName: 'application'

});

})();

(function() {

Admin.CmsView = Em.View.extend({
    templateName: 'cms/index',
    didInsertElement: function() {
        this.get("controller").createCmsMenuAndPreview();
    }
});

Admin.CmsPreviewView = Em.View.extend({
    templateName: 'cms/preview',
    didInsertElement: function() {

    }
});

})();

(function() {

Admin.CmsNavView = Em.View.extend({
    templateName: 'cms/nav'
});

})();

(function() {

Admin.FooterView = Em.View.extend({
    templateName: 'footer'

});

})();

(function() {

Admin.HeaderView = Em.View.extend({
    templateName: 'header',
    didInsertElement: function() {

    }
});

})();

(function() {

Admin.StoreCategoryEditView = Em.View.extend({
    templateName: 'store/category/edit',
    didInsertElement: function() {

    }
});



})();

(function() {

Admin.StoreCategoryListView = Em.View.extend({
    templateName: 'store/category/list',
    didInsertElement: function() {

    }
});




})();

(function() {

Admin.StoreProductEditView = Em.View.extend({
    templateName: 'store/product/edit',
    didInsertElement: function() {
        var me = this;

        $('#fileupload').fileupload({
            url: Vari.ApiPath + 'upload',
            dataType: 'json',
            done: function (e, data) {
                var src = data.result.filePath;
                var picture = me.get('controller').store.createRecord('picture', {
                    src: src
                });
                me.get('context').get('pictures').pushObject(picture);
            },
            send: function (e, data) {
                if (me.get('context').get('pictures').get('length') >= 5) {
                    alert('You can only upload 5 pictures.');
                    return false;
                }
                if (data.total > 10000000) {
                    alert('File size must be less than 10M.');
                    return false;
                }
            }
        });

        $(".fileinput-preview").delegate('.picture-container', 'mouseover', function(e){
            $(this).find('.remove').css("display", "block");
        });
        $(".fileinput-preview").delegate('.picture-container','mouseout',function(e){
            $(this).find('.remove').css("display", "none");
        });

        $(".fileinput-preview").delegate('.picture-container .remove', 'click', function(e){
             var src = $(this).prev("img").attr('src');
            console.log(me.get('context').get('pictures').get('length'));
            var idx = -1;
            me.get('context').get('pictures').forEach(function(item, index, enumerable){
                if ('/' + item.get('src')  === src) {
                    idx =  index;
                }
            });
            me.get('context').get('pictures').removeAt(idx);
            console.log(me.get('context').get('pictures').get('length'));
            $(this).parent('.picture-container').remove();
        });
    }
});



})();

(function() {

Admin.StoreProductListView = Em.View.extend({
    templateName: 'store/product/list',
    didInsertElement: function() {

    }
});



})();

(function() {

Admin.UserSignonView = Em.View.extend({

    templateName: 'user/signon',
    didInsertElement: function() {

    }

});

Admin.UserSignupView = Em.View.extend({

    templateName: 'user/signup',
    didInsertElement: function() {

    }

});

})();

(function() {



})();

(function() {

Admin.Router.map(function () {
    this.resource('index', { path: '/'});
    this.resource('user', { path: '/user' }, function() {
        this.route('signup', { path: '/signup' });
        this.route('signon', { path: '/signon' });
        this.route('signout', { path: '/signout' });
    });

    this.resource('apps', { path: '/apps' }, function() {
    });
    this.resource('app', { path: 'app/:app_id' }, function() {
        this.route('edit', { path: 'edit' });

        this.resource('cms', { path: 'cms' }, function() {

        });
    });
});


})();

(function() {



})();

(function() {

Admin.AppsRoute = Ember.Route.extend({
    model: function(params) {

    },
    setupController: function(controller) {
        controller.store.find('app').then(function(list) {
            controller.set('model', list);
        });
    }
});

Admin.AppRoute = Ember.Route.extend({
    model: function(params) {
        if (Util.isNotEmpty(params.app_id)) {
            var app = this.store.find('app', params.app_id);
            return app;
        }
    },
    setupController: function(controller, app) {
        controller.set('model', app);
    }
});

Admin.AppEditRoute = Ember.Route.extend({
    model: function(params) {

    },
    setupController: function(controller, app) {

    }
});




})();

(function() {

Admin.ApplicationRoute = Ember.Route.extend({
     actions: {

     }
});


})();

(function() {

Admin.CmsRoute = Ember.Route.extend({
    model: function(params) {

    },
    setupController: function(controller, app) {

    }
});




})();

(function() {

Admin.IndexRoute = Ember.Route.extend({
    redirect: function() {
        var me = this;
        AccountUtil.signonWithToken();
    }
});


})();

(function() {

Admin.CategoryEditRoute = Ember.Route.extend({
    model: function(params) {

    },
    setupController: function(controller, app) {

    }
});



})();

(function() {

Admin.UserRoute = Ember.Route.extend({
    actions: {
        signon: function() {
            this.controller.signon();
        },
        signup: function() {
            this.controller.signup();
        }
    }
});

Admin.UserSignonRoute = Ember.Route.extend({

});

Admin.UserSignupRoute = Ember.Route.extend({

});

Admin.UserSignoutRoute = Ember.Route.extend({
	setupController : function(controller, model) {
        var me = this;
        $.removeCookie(Vari.TokenName);
        Vari.UserEmail = null;
        me.transitionTo("user.signon");
    }
});

})();

(function() {



Admin.ApplicationAdapter = DS.RESTAdapter.extend({
    namespace: 'api/v1',
    host: 'http://192.168.1.228:9000'
});

Admin.Store = DS.Store.extend();

$.ajaxSetup({
    statusCode: {
        555: function() {
            AccountUtil.signonWithToken();
        }
    }
});
$.cookie.defaults = { expires: 7, path: '/', domain: "localhost" };


})();
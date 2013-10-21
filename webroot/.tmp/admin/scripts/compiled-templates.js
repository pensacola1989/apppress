Ember.TEMPLATES["app/apps"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\r\n                <tr>\r\n                    <td>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "app.id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</td>\r\n                    <td>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "app.name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</td>\r\n                    <td>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "app.descr", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</td>\r\n                    <td>\r\n                        <a href=\"#\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "modifyApp", "app", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Add Contents<a/> &nbsp;&nbsp;\r\n                        <a href=\"#\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "editApp", "app", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Edit<a/> &nbsp;&nbsp;\r\n                        <a href=\"#\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "deleteApp", "app", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Delete<a/> &nbsp;&nbsp;\r\n                    </td>\r\n                </tr>\r\n            ");
  return buffer;
  }

  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Admin.HeaderView", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\r\n\r\n<div id=\"app_list\" class=\"row-fluid main\">\r\n    <div class=\"new\">\r\n        <a href=\"#\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "createApp", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Create<a/>\r\n    </div>\r\n    <table class=\"table table-bordered table-hover\">\r\n        <thead>\r\n            <tr class=\"header\">\r\n                <th>ID</td>\r\n                <th>Name</td>\r\n                <th>Description</td>\r\n                <th>Action</td>\r\n            </tr>\r\n        <thead>\r\n        <tbody>\r\n            ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "app", "in", "content", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n        </tbody>\r\n    </table>\r\n</div>\r\n");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Admin.FooterView", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  return buffer;
  
});

Ember.TEMPLATES["app/contents"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  data.buffer.push("Back");
  }

  data.buffer.push("<div class=\"right\">\r\n    ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo || depth0.linkTo),stack1 ? stack1.call(depth0, "apps", options) : helperMissing.call(depth0, "linkTo", "apps", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\r\n</div>\r\n\r\n<div class=\"row-fluid\">\r\n	<div class=\"span12\">\r\n		<div class=\"row-fluid\">\r\n			<div class=\"span4 left_col\">\r\n				");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Admin.AppPreviewView", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\r\n				<div class=\"clear_both\"></div>\r\n			</div>\r\n			<div class=\"span8 right_col\">\r\n				<div id=\"main\">\r\n                     <button type=\"submit\" class=\"btn btn-primary\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "save", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Save</button>&nbsp;&nbsp;\r\n					<div class=\"clear_both\"></div>\r\n				</div>\r\n				<div class=\"clear_both\"></div>\r\n			</div>\r\n		</div>\r\n\r\n	</div>\r\n</div>\r\n\r\n");
  return buffer;
  
});

Ember.TEMPLATES["app/edit"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  data.buffer.push("Back");
  }

  data.buffer.push("<!-- <div class=\"right\">\r\n    ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo || depth0.linkTo),stack1 ? stack1.call(depth0, "apps", options) : helperMissing.call(depth0, "linkTo", "apps", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\r\n</div> -->\r\n\r\n<form id=\"appEditForm\" action=\"#\" class=\"form-horizontal\">\r\n    <div id=\"content\">\r\n        <div class=\"control-group\">\r\n            <label class=\"control-label\" for=\"name\">Name</label>\r\n            <div class=\"controls\">\r\n                ");
  hashContexts = {'name': depth0,'name': depth0,'valueBinding': depth0,'classNames': depth0};
  hashTypes = {'name': "STRING",'name': "STRING",'valueBinding': "STRING",'classNames': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'name': ("name"),
    'name': ("name"),
    'valueBinding': ("app.content.name"),
    'classNames': ("required")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\r\n            </div>\r\n        </div>\r\n        <div class=\"control-group\">\r\n            <label class=\"control-label\" for=\"headline\">Description</label>\r\n            <div class=\"controls\">\r\n                ");
  hashContexts = {'name': depth0,'valueBinding': depth0};
  hashTypes = {'name': "STRING",'valueBinding': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextArea", {hash:{
    'name': ("descr"),
    'valueBinding': ("app.content.descr")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div id=\"toolbar\">\r\n        <div class=\"control-group\">\r\n            <div class=\"controls\">\r\n                <button type=\"submit\" class=\"btn btn-primary\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "saveApp", "app.content", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Save</button>&nbsp;&nbsp;\r\n                <button type=\"reset\" class=\"btn\">Reset</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</form>\r\n\r\n\r\n");
  return buffer;
  
});

Ember.TEMPLATES["app/main"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', hashTypes, hashContexts, escapeExpression=this.escapeExpression;


  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Admin.HeaderView", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\r\n");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\r\n");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Admin.FooterView", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  return buffer;
  
});

Ember.TEMPLATES["app/preview"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class=\"left_panel\">\n    <iframe src=\"http://www.baidu.com\" frameborder=\"0\" scrolling=\"no\" style=\"height: 460px; width: 320px;\"></iframe>\n	<div class=\"clear_both\"></div>\n</div>\n");
  
});

Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', hashTypes, hashContexts, escapeExpression=this.escapeExpression;


  data.buffer.push("<div>\r\n    <div class=\"container-fluid\">\r\n        ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\r\n    </div>\r\n</div>\r\n");
  return buffer;
  
});

Ember.TEMPLATES["cms/index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', hashTypes, hashContexts, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"row-fluid\">\r\n      <div class=\"left_col\">\r\n          ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Admin.CmsPreviewView", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\r\n          <div class=\"clear_both\"></div>\r\n      </div>\r\n      <div class=\"right_col\">\r\n          <div id=\"main\">\r\n            <ul id=\"tab-bar\" class=\"nav nav-tabs\">\r\n              <li>\r\n                <a href=\"#\">Configuration</a>\r\n              </li>\r\n              <li class=\"active\">\r\n                <a href=\"#\">Add Contents</a>\r\n              </li>\r\n            </ul>\r\n            <div id=\"tab-panel\">\r\n                <div id=\"cms-header\">\r\n                    <div id=\"cms-menu\" class=\"jcarousel-skin\">\r\n                        <ul></ul>\r\n                    </div>\r\n                    <div id=\"cms-nav\" class=\"\">\r\n                         ");
  hashContexts = {'elementId': depth0};
  hashTypes = {'elementId': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Admin.CmsNavView", {hash:{
    'elementId': ("cms_nav_view")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\r\n                    </div>\r\n                </div>\r\n\r\n                <div id=\"cms-content\">\r\n                     ");
  hashContexts = {'elementId': depth0};
  hashTypes = {'elementId': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Em.ContainerView", {hash:{
    'elementId': ("cms_content_view")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\r\n                </div>\r\n            </div>\r\n\r\n              <div class=\"clear_both\"></div>\r\n          </div>\r\n          <div class=\"clear_both\"></div>\r\n      </div>\r\n </div>\r\n\r\n\r\n");
  return buffer;
  
});

Ember.TEMPLATES["cms/nav"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var stack1, hashTypes, hashContexts, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.breadcrumb || depth0.breadcrumb),stack1 ? stack1.call(depth0, "", options) : helperMissing.call(depth0, "breadcrumb", "", options))));
  
});

Ember.TEMPLATES["cms/preview"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<iframe scrolling=\"no\" frameborder=\"0\" height=\"480\" width=\"320\" style=\"background:url(images/preview.png)\" name=\"previewFrame\" id=\"previewFrame\" src=\"\"></iframe>");
  
});

Ember.TEMPLATES["footer"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div id=\"footer\" class=\"center\">\r\n    &copy;2013 eastidea.com. All rights reserved.\r\n</div>");
  
});

Ember.TEMPLATES["header"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("\r\n                                        <span class=\"icon-home\"></span>\r\n                                  ");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\r\n                                      <span class=\"icon-signout\"></span>\r\n                                  ");
  }

  data.buffer.push("<div id=\"header\" class=\"navbar navbar-fixed-top\">\r\n    <div class=\"navbar-inner ap-navbar-bg\">\r\n        <div class=\"container-fluid\">\r\n            <div class=\"container\">\r\n                <div class=\"row\">\r\n                    <div class=\"span2\">\r\n                         <div class=\"brand\">\r\n                              <div style=\"float: left;\"><img src=\"images/logo.png\"></div>\r\n                              <div class=\"beta\" style=\"float: left;\">Beta</div>\r\n                         </div>\r\n                    </div>\r\n                    <div class=\"span14 top-bar\">\r\n                        <div class=\"top-panel pull-right\">\r\n                                  ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo || depth0.linkTo),stack1 ? stack1.call(depth0, "apps", options) : helperMissing.call(depth0, "linkTo", "apps", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\r\n                                  ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo || depth0.linkTo),stack1 ? stack1.call(depth0, "user.signout", options) : helperMissing.call(depth0, "linkTo", "user.signout", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\r\n                        </div>\r\n                        <div class=\"top-panel pull-right\">\r\n                                <span id=\"userEmail\">&nbsp;</span>\r\n                                <a href=\"#\">\r\n                                    <span id=\"userEmail\">aaronchen2k@gmail.com</span>\r\n                                </a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div style=\"height:30px;\"></div>\r\n");
  return buffer;
  
});

Ember.TEMPLATES["store/category/edit"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', hashContexts, hashTypes, escapeExpression=this.escapeExpression;


  data.buffer.push("<form id=\"categoryEditForm\" action=\"#\">\r\n    <div id=\"content\">\r\n        <div class=\"control-group\">\r\n            <label class=\"control-label\" for=\"name\">Name</label>\r\n            <div class=\"controls\">\r\n                ");
  hashContexts = {'name': depth0,'valueBinding': depth0,'classNames': depth0};
  hashTypes = {'name': "STRING",'valueBinding': "STRING",'classNames': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'name': ("name"),
    'valueBinding': ("name"),
    'classNames': ("required")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div id=\"toolbar\">\r\n        <div class=\"control-group\">\r\n            <div class=\"controls\">\r\n                <button type=\"submit\" class=\"btn btn-primary\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "saveCategory", "", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Save</button>&nbsp;&nbsp;\r\n                <button type=\"reset\" class=\"btn\">Reset</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</form>");
  return buffer;
  
});

Ember.TEMPLATES["store/category/list"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\r\n                <tr>\r\n                    <td>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "category.id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</td>\r\n                    <td>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "category.name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</td>\r\n                    <td>\r\n                        <a href=\"#\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "showProductList", "category", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">View<a/> &nbsp;&nbsp;\r\n                        <a href=\"#\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "editCategory", "category", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Edit<a/> &nbsp;&nbsp;\r\n                        <a href=\"#\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "deleteCategory", "category", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Delete<a/> &nbsp;&nbsp;\r\n                    </td>\r\n                </tr>\r\n            ");
  return buffer;
  }

  data.buffer.push("<a href=\"#\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "createCategory", "store", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Create<a/>\r\n<table class=\"table table-bordered table-hover\">\r\n    <thead>\r\n        <tr class=\"header\">\r\n            <th>ID</td>\r\n            <th>Name</td>\r\n            <th>Action</td>\r\n        </tr>\r\n    <thead>\r\n    <tbody>\r\n            ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "category", "in", "categories", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n    </tbody>\r\n</table>\r\n\r\n\r\n");
  return buffer;
  
});

Ember.TEMPLATES["store/product/edit"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashContexts, hashTypes, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\r\n                          <div class=\"picture-container\">\r\n                            <img src=\"/");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "src", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\" class=\"img-rounded thumb\">\r\n                            <span class=\"remove\"></span>\r\n                           </div>\r\n                      ");
  return buffer;
  }

  data.buffer.push("<form id=\"productEditForm\" action=\"#\" class=\"form-horizontal\">\r\n    <div id=\"content\">\r\n        <div class=\"control-group\">\r\n            <label class=\"control-label\" for=\"name\">Name</label>\r\n            <div class=\"controls\">\r\n                ");
  hashContexts = {'name': depth0,'valueBinding': depth0,'classNames': depth0};
  hashTypes = {'name': "STRING",'valueBinding': "STRING",'classNames': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'name': ("name"),
    'valueBinding': ("name"),
    'classNames': ("required")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\r\n            </div>\r\n        </div>\r\n        <div class=\"control-group\">\r\n            <label class=\"control-label\" for=\"price\">Price</label>\r\n            <div class=\"controls\">\r\n                ");
  hashContexts = {'name': depth0,'valueBinding': depth0,'classNames': depth0};
  hashTypes = {'name': "STRING",'valueBinding': "STRING",'classNames': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'name': ("price"),
    'valueBinding': ("price"),
    'classNames': ("required number")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\r\n            </div>\r\n        </div>\r\n        <div class=\"control-group\">\r\n            <label class=\"control-label\" for=\"freight\">Freight</label>\r\n            <div class=\"controls\">\r\n                ");
  hashContexts = {'name': depth0,'valueBinding': depth0,'classNames': depth0};
  hashTypes = {'name': "STRING",'valueBinding': "STRING",'classNames': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'name': ("freight"),
    'valueBinding': ("freight"),
    'classNames': ("required number")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\r\n            </div>\r\n        </div>\r\n        <div class=\"control-group\">\r\n            <label class=\"control-label\" for=\"descr\">Descr</label>\r\n            <div class=\"controls\">\r\n                ");
  hashContexts = {'name': depth0,'valueBinding': depth0};
  hashTypes = {'name': "STRING",'valueBinding': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextArea", {hash:{
    'name': ("descr"),
    'valueBinding': ("descr")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\r\n            </div>\r\n        </div>\r\n        <div class=\"control-group\">\r\n            <label class=\"control-label\" for=\"flatRate\">FlatRate</label>\r\n            <div class=\"controls\">\r\n                ");
  hashContexts = {'name': depth0,'checkedBinding': depth0,'classNames': depth0};
  hashTypes = {'name': "STRING",'checkedBinding': "STRING",'classNames': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Checkbox", {hash:{
    'name': ("flatRate"),
    'checkedBinding': ("flatRate"),
    'classNames': ("")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\r\n            </div>\r\n        </div>\r\n        <div class=\"control-group\">\r\n            <label class=\"control-label\" for=\"flatRate\">Images</label>\r\n            <div class=\"controls\">\r\n                <span class=\"btn fileinput-button\">\r\n                	<i class=\"icon-upload\"></i>\r\n                	<span>Upload...</span>\r\n                	<input id=\"fileupload\" type=\"file\" name=\"files[]\" accept=\"image/*\">\r\n                </span>\r\n                <div class=\"fileinput-preview\">\r\n                      ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "pictures", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                      <div class=\"clear-both\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n    <div id=\"toolbar\">\r\n        <div class=\"control-group\">\r\n            <div class=\"controls\">\r\n                <button type=\"submit\" class=\"btn btn-primary\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "saveProduct", "", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Save</button>&nbsp;&nbsp;\r\n                <button type=\"reset\" class=\"btn\">Reset</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</form>");
  return buffer;
  
});

Ember.TEMPLATES["store/product/list"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\r\n            <tr>\r\n                <td>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "product.id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</td>\r\n                <td>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "product.name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</td>\r\n                <td>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "product.price", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</td>\r\n                <td class=\"show-one\">\r\n                    <img src=\"/");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "product.thumb", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\" class=\"img-rounded thumb\">\r\n                </td>\r\n                <td>\r\n                    <a href=\"#\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "editProduct", "product", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Edit<a/> &nbsp;&nbsp;\r\n                    <a href=\"#\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "deleteProduct", "product", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Delete<a/> &nbsp;&nbsp;\r\n                </td>\r\n            </tr>\r\n        ");
  return buffer;
  }

  data.buffer.push("<a href=\"#\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "createProduct", "category", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Create<a/>\r\n<table class=\"table table-bordered table-hover\">\r\n    <thead>\r\n        <tr class=\"header\">\r\n            <th>ID</td>\r\n            <th>Name</td>\r\n            <th>Price</td>\r\n            <th>Image</td>\r\n            <th>Action</td>\r\n        </tr>\r\n    <thead>\r\n    <tbody>\r\n        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "product", "in", "products", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n    </tbody>\r\n</table>\r\n\r\n\r\n\r\n\r\n");
  return buffer;
  
});

Ember.TEMPLATES["user/signon"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("Register");
  }

  data.buffer.push("<div class=\"row-fluid\">\r\n	<div class=\"span12\">\r\n		<div id=\"main\">\r\n			<form id=\"signonForm\" class=\"form-horizontal group cmxform w-600\" action='");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.reqPath || depth0.reqPath),stack1 ? stack1.call(depth0, "user/signon", options) : helperMissing.call(depth0, "reqPath", "user/signon", options))));
  data.buffer.push("' method=\"POST\">\r\n			  <legend>Sign On</legend>\r\n			  <div class=\"control-group\">\r\n			    <label class=\"control-label\" for=\"inputEmail\">Email</label>\r\n			    <div class=\"controls\">\r\n			      <input type=\"email\" id=\"inputEmail\" name=\"email\"\r\n			      	class=\"required email\" >\r\n			    </div>\r\n			  </div>\r\n			  <div class=\"control-group\">\r\n			    <label class=\"control-label\" for=\"inputPassword\">Password</label>\r\n			    <div class=\"controls\">\r\n			      <input id=\"inputPassword\" type=\"password\" name=\"password\"\r\n			      	class=\"required \" >\r\n			    </div>\r\n			  </div>\r\n			  <div class=\"control-group\">\r\n			    <div class=\"controls\">\r\n			      <label class=\"checkbox\">\r\n			      	<input type=\"checkbox\" name=\"rememberMe\" checked=\"checked\">Remember me\r\n			      </label>\r\n			      <button ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "signon", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" class=\"btn btn-primary\">Submit</button>&nbsp;&nbsp;\r\n				  <button type=\"reset\" class=\"btn\">Reset</button>&nbsp;&nbsp;&nbsp;&nbsp;\r\n\r\n				  ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo || depth0.linkTo),stack1 ? stack1.call(depth0, "user.signup", options) : helperMissing.call(depth0, "linkTo", "user.signup", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("&nbsp;&nbsp;\r\n				  <a ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "guestSignon", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" href=\"#\">Guest</a>\r\n			    </div>\r\n			  </div>\r\n			</form>\r\n		</div>\r\n	</div>\r\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["user/signup"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"row-fluid\">\r\n	<div class=\"span12\">\r\n		<div id=\"main\">\r\n			<form id=\"signupForm\" class=\"form-horizontal group cmxform w-600\" action='");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.reqPath || depth0.reqPath),stack1 ? stack1.call(depth0, "user/signup", options) : helperMissing.call(depth0, "reqPath", "user/signup", options))));
  data.buffer.push("' method=\"POST\">\r\n			  <legend>Sign Up</legend>\r\n			  <div class=\"control-group\">\r\n			    <label class=\"control-label\" for=\"inputEmail\">Email</label>\r\n			    <div class=\"controls\">\r\n			      <input type=\"email\" id=\"inputEmail\" name=\"email\" \r\n			      	class=\"required email\" >\r\n			    </div>\r\n			  </div>\r\n			  <div class=\"control-group\">\r\n			    <label class=\"control-label\" for=\"inputPassword\">Password</label>\r\n			    <div class=\"controls\">\r\n			      <input id=\"inputPassword\" type=\"password\" name=\"password\" \r\n			      	minlength=\"6\" class=\"required \" >\r\n			    </div>\r\n			  </div>\r\n			  <div class=\"control-group\">\r\n			    <label class=\"control-label\" for=\"confirmPassword\">Confirm Password</label>\r\n			    <div class=\"controls\">\r\n			      <input id=\"confirmPassword\" type=\"password\" name=\"confirmPassword\" \r\n			      	minlength=\"6\"  class=\"required\" >\r\n			    </div>\r\n			  </div>\r\n			  <div class=\"control-group\">\r\n			    <div class=\"controls\">\r\n			      <button ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "signup", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" class=\"btn btn-primary\">Submit</button>&nbsp;&nbsp;\r\n				  <button type=\"reset\" class=\"btn\">Reset</button>\r\n			    </div>\r\n			  </div>\r\n			</form>\r\n		</div>\r\n	</div>\r\n</div>");
  return buffer;
  
});
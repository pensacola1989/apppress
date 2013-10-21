Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', hashTypes, hashContexts, escapeExpression=this.escapeExpression;


  data.buffer.push("<div id=\"header\">\r\n    <a href=\"#menu\"></a>\r\n    Demo App\r\n</div>\r\n\r\n<nav id=\"menu\">\r\n    <ul>\r\n        <li class=\"Selected\"><a href=\"index.html\">Basic example</a></li>\r\n        <li><a href=\"horizontal-submenus.html\">Horizontal sliding submenus example</a></li>\r\n        <li><a href=\"vertical-submenus.html\">Vertical submenus example</a></li>\r\n        <li><a href=\"positions.html\">Positioning the menu</a></li>\r\n        <li><a href=\"advanced.html\">Advanced example</a></li>\r\n        <li><a href=\"onepage.html\">One page scrolling example</a></li>\r\n        <li><a href=\"iconbar.html\">Iconbar</a></li>\r\n        <li><a href=\"dragopen.html\">Drag/swipe the menu open</a></li>\r\n    </ul>\r\n</nav>\r\n<div id=\"content\">\r\n    <div class=\"container-fluid\">\r\n        ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\r\n    </div>\r\n</div>\r\n");
  return buffer;
  
});

Ember.TEMPLATES["main/content"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("CONTENT");
  
});
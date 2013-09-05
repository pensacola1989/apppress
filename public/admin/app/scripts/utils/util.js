Custant = {};
if (location.href.indexOf("192.168") > -1) {
    Custant.Site = "http://192.168.1.228:9000/";
    Custant.ApiRoot = Custant.Site + "api/v1/";
	Custant.AdminRoot = Custant.Site + "admin/app/";
    Custant.ClientRoot = Custant.Site + "client/app/";
} else {
    Custant.Site = "http://121.199.18.199/";
    Custant.ApiRoot = Custant.Site + "api/v1/";
	Custant.AdminRoot = Custant.Site + "a/";
    Custant.ClientRoot = Custant.Site + "c/";
}

Vari = {
	ApiRestV1: Custant.WebRoot + "api/1/rest/",
	
	TokenName: "apppress.token",
	UserEmail: null,
	
	UserId: 0,
	CurrAppId: null,
	CurrAction: null,
	DragType: null,
	srcId: null
};

Util = {
	isEmpty: function (o){
		if (o == null || o== "null" || o == undefined || o == "undefined" || o == "") {
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
            if (arg[0] == pname) {
            	//console.log('find url param: ' + arg[0]+'="'+arg[1]+'";');
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
			if ( links[i].rel == rel && 
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
	},
};
AccountUtil = {
    signonWithToken: function() {
//        var token = $.cookie(Vari.TokenName);
//
//        if (Util.isEmpty(token)) {
//            //route.transitionTo("user.signon");
//            location.href="#user/signon";
//        } else {
//            var token = $.cookie(Vari.TokenName);
//            $.ajax({
//                type : 'POST',
//                dataType : 'json',
//                //contentType: "application/json",
//                async : false,
//                url : Vari.ApiRestV1 + 'user/signonWithToken',
//                data : {
//                    token: token
//                },
//                success : function(json) {
//                    if (json.success) {
//                        console.log("success to signonWithToken");
//
//                        $.cookie(Vari.TokenName, json.token);
//                        Vari.UserEmail = json.email;
//                        //route.transitionTo('apps');
//                        if (location.href.indexOf("apps") > -1) {
//                            location.reload();
//                        } else {
//                            location.href="#apps";
//                        }
//                    } else {
//                        $.removeCookie(Vari.TokenName);
//                        //route.transitionTo("user.signon");
//                        location.href="#user/signon";
//                    }
//                }
//            });
//        }
        location.href="#/user/signon";
    }
};
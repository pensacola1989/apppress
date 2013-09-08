AccountUtil = {
    signonWithToken: function() {
        $.cookie(Vari.TokenName, '123456');
        var token = $.cookie(Vari.TokenName);
        if (Util.isEmpty(token)) {
            //route.transitionTo("user.signon");
            location.href="#/user/signon";
        } else {     console.log(Vari.ApiPath + 'user/signonWithToken');
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

                        $.cookie(Vari.TokenName, json.token);
                        Vari.UserEmail = json.email;
                        //route.transitionTo('apps');
                        if (location.href.indexOf("apps") > -1) {
                            location.reload();
                        } else {
                            //location.href="#/apps";
                        }
                    } else {
                        $.removeCookie(Vari.TokenName);
                        //route.transitionTo("user.signon");
                        location.href="#/user/signon";
                    }
                }
            });
        }
        //location.href="#/apps";
    }
};
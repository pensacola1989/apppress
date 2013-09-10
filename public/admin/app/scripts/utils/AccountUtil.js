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
                        Vari.UserEmail = json.data.email;

                        if (location.href.indexOf("app/list") > -1) {
                            location.reload();
                        } else {
                            location.href="#/app/list";
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
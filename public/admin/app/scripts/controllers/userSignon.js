Admin.UserSignonController = Em.ObjectController.extend({
    actions: {
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

                    Vari.UserEmail = json.data.email;
                    me.transitionToRoute("app.list");
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
                        Vari.UserEmail = json.email;
                        me.transitionToRoute("apps");
                    } else {
                        $.removeCookie(Vari.TokenName);
                    }
                }
            });
            return false;
        }
    }
});

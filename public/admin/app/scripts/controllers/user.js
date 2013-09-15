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

                Vari.UserEmail = json.data.email;
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
                    Vari.UserEmail = json.email;
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
                Vari.UserEmail = json.email;
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

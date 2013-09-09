Admin.UserSignupController = Em.ObjectController.extend({
    actions: {
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

            $("#signupForm").ajaxSubmit(function(json) {
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
                    console.log(json);

                    alertify.set({ delay: 10000 });
                    alertify.alert(json.code);
                }
            });
            return false;
        }
    }
});
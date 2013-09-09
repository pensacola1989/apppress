Admin.UserSignupController = Em.ObjectController.extend({
    actions: {
        signup: function(form) {   console.log(1);
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
                    alertify.alert('<span class="my-success">' + 'Success to signup!' + '</span>');
                    //me.transitionToRoute("apps");
                } else {
                    $.removeCookie(Vari.TokenName);

                    alertify.alert('<span class="my-error">' + json.code + '</span>');
                }

            });
            return false;
        }
    }
});
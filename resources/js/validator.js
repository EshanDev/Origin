// get base url
let getUrl = window.location,
    baseUrl =
        getUrl.protocol +
        "//" +
        getUrl.host +
        "/" +
        getUrl.pathname.split("/")[1];
console.log("this is a " + baseUrl + "/verify_email");
console.log("http://" + location.host + "/auth/verify");

$(function() {
    // Validate for Registration form.
    let register = document.getElementById("registration_form"),
        login = document.getElementById("login_form"),
        condition = document.getElementById("condition_form"),
        registration = document.getElementById("verify_form");

    $(register).validate({
        rules: {
            registration_code: "required",
            student_code: "required",
            student_email: "required"
        }
    });

    $(registration).validate({
        rules: {
            registration_code: {
                required: true,
                remote: {
                    url: baseUrl + "/verify",
                    type: "post",
                    data: {
                        _token: function() {
                            return $('input[name="_token"]').val();
                        }
                    }
                }
            }
        },
        messages: {
            registration_code: {
                remote: "รหัสลงทะเบียนไม่ถูกต้อง"
            }
        },
        highlight: function(element) {
            jQuery(element)
                .closest(".form-control")
                .addClass("is-invalid");
        },
        unhighlight: function(element) {
            jQuery(element)
                .closest(".form-control")
                .removeClass("is-invalid");
            jQuery(element)
                .closest(".form-control")
                .addClass("is-valid");
        }
    });

    $(login).validate({
        rules: {
            email: "required",
            password: "required"
        }
    });

    jQuery.validator.setDefaults({
        onfocusout: function(e) {
            this.element(e);
        },
        onkeyup: false,

        highlight: function(element) {
            jQuery(element)
                .closest(".form-control")
                .addClass("is-invalid");
        },
        unhighlight: function(element) {
            jQuery(element)
                .closest(".form-control")
                .removeClass("is-invalid");
            jQuery(element)
                .closest(".form-control")
                .addClass("is-valid");
        },

        errorElement: "div",
        errorClass: "invalid-feedback",
        errorPlacement: function(error, element) {
            if (element.parent(".input-group-prepend").length) {
                $(element)
                    .siblings(".invalid-feedback")
                    .append(error);
                //error.insertAfter(element.parent());
            } else {
                error.insertAfter(element);
            }
        }
    });

    $.validator.addMethod(
        "studentCode",
        function(student_code, element) {
            student_code = student_code.replace(/\s+/g, "");
            return (
                this.optional(element) ||
                (student_code.length > 9 &&
                    student_code.match(
                        /^([4-6]{1}[0-9]{1}[0-9]{2}[0-9]{1}[0-9]{4}[0-9]{1})$/
                    ))
            );
        },
        "รูปแบบรหัสนักศึกษาไม่ถูกต้อง"
    );

    $(condition).validate({
        rules: {
            student_code: {
                required: true,
                number: true,
                minlength: 10,
                maxlength: 10,
                studentCode: true
            },
            student_email: {
                required: true,
                email: true
            }
        },
        messages: {
            student_code: {
                required: "กรุณาระบบรหัสนักศึกษา",
                number: "รูปแบบรหัสนักศึกษาไม่ถูกต้อง",
                minlength: "รูปแบบรหัสนักศึกษาไม่ถูกต้อง",
                maxlength: "รูปแบบรหัสนักศึกษาไม่ถูกต้อง"
            },
            student_email: {
                required: "กรุณาระบุที่อยู่อีเมล์",
                email: "รูปแบบอีเมล์ไม่ถูกต้อง"
            }
        }
    });
});

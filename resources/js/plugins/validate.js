jQuery(document).ready(function(){
   jQuery(window).keydown(function (event) {
       if(event.keyCode == 13) {
           event.preventDefault();
           return false;
       }
   })
});

let getUrl = window.location;
let baseUrl = getUrl.protocol + "//" + getUrl.host + "/" + getUrl.pathname.split("/")[1];


jQuery.validator.setDefaults({
    highlight: function (element) {
        $(element).closest('.form-control').addClass('is-invalid');
    },
    unhighlight: function (element) {
        $(element).closest('.form-control').removeClass('is-invalid').addClass('is-valid');
    },
});




// Verify Condition form.
require('./addMethod');
$("#condition_form").validate({
   rules: {
       student_code: {
           required: true,
           studentCode: true,
           remote: {
               url: baseUrl + "/verify/is_invalid",
               type: "POST",
               data: {
                   _token: function(){
                       return jQuery('input[name="_token"]').val();
                   },
               },
           },
       },
       student_email: {
           required: true,
           email: true,
           remote: {
               url: baseUrl + "/verify/is_invalid",
               type: "POST",
               data: {
                   _token: function(){
                       return jQuery('input[name="_token"]').val();
                   },
               },
           }
       },
   },
    messages: {
        student_code: {
            required: "กรุณาระบุรหัสนักศึกษา",
            remote: "รหัสนักศึกษานี้ได้ลงทะเบียนไว้แล้ว",
        },
        student_email: {
            required: "กรุณาระบุที่อยู่อีเมล์",
            email: "รูปแบบอีเมล์ไม่ถูกต้อง",
            remote: "ที่อยู่อีเมล์นี้ได้ลงทะเบียนไว้แล้ว",
        },
    },
});


// Verify Registration code form.
$("#verify_form").validate({
   rules: {
       registration_code: {
           required: true,
           remote: {
               url: baseUrl + "/verify/is_valid",
               type: "POST",
               data: {
                   _token: function(){
                       return $('input[name="_token"]').val();
                   },
               },
           },
       },
   },
    messages: {
       registration_code: {
           required: "กรุณากรอกรหัสลงทะเบียน",
           remote: "รหัสลงทะเบียนไม่ถูกต้อง",
       },
    },
});


//Verify login form.

$("#login_form").validate({
    rules: {
       email: {
           required: true,
           remote: {
               url: baseUrl + "/verify/checkUserName",
               type: "POST",
               data: {
                   _token: function(){
                       return $('input[name="_token"]').val();
                   },
               },
           },

       },
       password: {
           required: true,
       },
    },
    messages :{
        email: {
            required: "กรุณากรอก อีเมล์ หรือ รหัสนักศึกษา",
        },
        password: {
            required: "กรุณากรอกรหัสผ่าน",
        }
    }
})


// Verify Register form.
$("#registration_form").validate({
   rules: {
       student_code: "required",
       registration_code: "required",
       student_name: 'required',
       student_branch: 'required',
       student_faculty: 'required',
       password: 'required',
       name: "required",
       password_confirmation: {
           required: true,
           equalTo: "#password",
       },
   },

    messages: {
       student_code: {
           required: "กรุณากรอกรหัสนักศึกษา",
       },
        student_email: {
           required: "กรุณาที่อยู่อีเมล์",
        },
        student_name: {
           required: "กรุณาระบุชื่อ-นามสกุล",
        },
        student_branch: {
           required: "กรุณาระบุสาขาวิชาเอก",
        },
        student_faculty: {
           required: "กรุณาระบุคณะที่กำลังศึกษา",
        },
        password: {
           required: "กรุณาระบุรหัสผ่าน",
        },
        password_confirmation: {
           required: "กรุณาระบุรหัสผ่านอีกครั้ง",
            equalTo: "รหัสผ่านไม่ตรงกัน",
        },
    }
});


// Verify Reset password
$("#reset_form").validate({
    rules: {
        email: {
            required: true,
            email: true,
            remote: {
                url: baseUrl + "/verify/is_valid",
                type: "POST",
                data: {
                    _token: function(){
                        return $('input[name="_token"]').val();
                    }
                },
            },
        },

    },
    messages: {
        email: {
            email: "รูปแบบอีเมล์ไม่ถูกต้อง",
            required: "กรุณากรอกที่อยู่อีเมล์",
            remote: "ไม่พบที่อยู่อีเมล์นี้",
        }
    }
})

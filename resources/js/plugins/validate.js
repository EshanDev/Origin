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
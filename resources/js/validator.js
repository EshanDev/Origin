// get base url
let getUrl = window.location,
    baseUrl = getUrl.protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
console.log("this is a "+baseUrl + "verify_email");




// Validate for Registration form.
 let register = document.getElementById('registration_form');

$(register).validate({
    rules: {
        registration_code: "required",
        student_code: "required",
        student_email: "required",
    }
});


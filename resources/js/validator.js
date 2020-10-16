// get base url
let getUrl = window.location,
    baseUrl = getUrl.protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
console.log("this is a "+baseUrl + "verify_email");


$("form").bind("keypress", function(e){
	if(e.keyCode == 13) {
		return false;
	}
});


// Validate for Registration form.
 let register = document.getElementById('registration_form'),
 	condition = document.getElementById("condition_form");

$(register).validate({
    rules: {
        registration_code: "required",
        student_code: "required",
        student_email: "required",
    }
});



$.validator.addMethod("studentCode", function(student_code, element){
	student_code = student_code.replace(/\s+/g, "");
	return this.optional(element) || student_code.length > 9 && student_code.match(/^([4-6]{1}[0-9]{1}[0-9]{2}[0-9]{1}[0-9]{4}[0-9]{1})$/);
}, "รูปแบบรหัสนักศึกษาไม่ถูกต้อง");

$(condition).validate({
	rules: {
		student_code: {
			required: true,
			number: true,
			minlength: 10,
			maxlength: 10,
			studentCode: true,
		},
		student_email: {
			required: true,
			email: true,
		}
	},
	messages: {
		student_code: {
			required: "กรุณาระบบรหัสนักศึกษา",
			number: "รูปแบบรหัสนักศึกษาไม่ถูกต้อง",
			minlength: "รูปแบบรหัสนักศึกษาไม่ถูกต้อง",
			maxlength: "รูปแบบรหัสนักศึกษาไม่ถูกต้อง",
		},
		student_email: {
			required: "กรุณาระบุที่อยู่อีเมล์",
			email: "รูปแบบอีเมล์ไม่ถูกต้อง",
		},
	},
});


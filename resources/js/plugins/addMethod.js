$.validator.addMethod(
    "studentCode",
    function (student_code, element) {
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

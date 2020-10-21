let getUrl = window.location
let baseUrl = getUrl.protocol + "//" + getUrl.host + "/" + getUrl.pathname.split("/")[1]


jQuery.validator.setDefaults({
    highlight: function (element) {
        $(element).closest('.form-control').addClass('is-invalid');
    },
    unhighlight: function (element) {
        $(element).closest('.form-control').removeClass('is-invalid').addClass('is-valid');
    },

    errorElement: 'span',
    errorClass: 'invalid-feedback',
    errorPlacement: function(error, element){
        if(element.parent('.input-group-prepend').length){
            $(element).siblings(".invalid-feedback").append(error);
            //error.insertAfter(element.parent());
        } else {
            error.insertAfter(element);
        }
    }
})

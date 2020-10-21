let getUrl = window.location,
    baseUrl = getUrl.protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];

console.log("this is a " + baseUrl + "/verify_email");
console.log("http://" + location.host + "/auth/verify");

/*Send email function*/ 
function submitEmail(inputForm) {
    emailjs.send("service_yf3pn0p", "newIrishLife", {
        "from_name": inputForm.name.value,
        "from_email": inputForm.email.value
    })
    .then(
        function (response) {
            console.log("SUCCESS", response);
        },
        function (error) {
            console.log("FAILED", error);
        });
        return false;
};


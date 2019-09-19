window.onload = function() {
    var loginModal = document.getElementById("loginModal");
    var loginBtn = document.getElementById("login-button");
    var closeModal = document.getElementById("loginModal-content-close");
    var passField = document.getElementById("password-field");
    var emailField = document.getElementById("email-field");
    var submitBtn = document.getElementById("login-form-submit");
    var errorContainer = document.getElementById("error-container");
    loginBtn.onclick = function() {
        loginModal.style.display = "block";
    }
    closeModal.onclick = function() {
        loginModal.style.display = "none";
    };

    passField.onmouseleave = leftField;
    emailField.onmouseleave = leftField;
    window.onclick = hide_modal;

    function leftField() {
        var email = emailField.value;
        var pass = passField.value;
        if (email == "" || pass == "") {
            return;
        }
        var flag1 = !validateEmail(email);
        var flag2 = !validatePassword(pass);
        var message = ""
        if (( flag1 || flag2)) {
            submitBtn.style.opacity = "0.5"
            if (flag1) {
                message += "Bad email adress; "
            }
            if (flag2) {
                message += "Your password should be at least 8 symbols, contain 1 uppercase, 1 downcase letter, 1 spec symbol, 1 number"
            }
            errorContainer.innerHTML = message;
            return;
    }
    submitBtn.style.opacity = "1.0";
    errorContainer.innerHTML = "";
}

}


function validateEmail(email) {
    var re =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase());
}

function validatePassword(pass) {
    let re = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    return re.test(pass);
}

function hide_modal(event) {
    if (event.target == loginModal) {
        loginModal.style.display = "none";
    }
}








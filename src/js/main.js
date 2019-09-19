var is_error_showed = 0;

window.onload=function(){
    var loginModal = document.getElementById("loginModal");
    var loginBtn = document.getElementById("login-button");
    var closeModal = document.getElementById("loginModal-content-close");
    var passField = document.getElementById("password-field");
    var emailField = document.getElementById("email-field");
    var submitBtn = document.getElementById("login-form-submit");
    var errorModal = document.getElementById("error-window");
    loginBtn.onclick = function() {
        loginModal.style.display = "block";
    }
    closeModal.onclick = function() {
        loginModal.style.display = "none";
    }

    passField.onmouseleave= function() {
        var email = emailField.value;
        var pass = passField.value;
        if (email == "" || pass == "") {
            return;
        }
        if ((!validateEmail(email)) || (!validatePassword(pass))) {
            submitBtn.style.opacity = "0.5"
            if (is_error_showed == 0) {
                errorModal.style.display = "block";
                is_error_showed = 1;
            }
            return;
        }
        //alert(111111);
        submitBtn.style.opacity = "1.0";
    }

    emailField.oninput = resetErrorFlag;
    passField.oninput = resetErrorFlag;

    window.onclick = function(event) {
        if (event.target == loginModal) {
            loginModal.style.display = "none";
        }
        errorModal.style.display = "none";
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

function resetErrorFlag() {
    is_error_showed = 0;
}

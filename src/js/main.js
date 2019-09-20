window.onload = function() {
    var loginModal = document.getElementById("logModal-container");
    var loginBtn = document.getElementById("header-button");
    var closeModal = document.getElementById("logModal-close");
    var passField = document.getElementById("logModal-form-password-input");
    var emailField = document.getElementById("logModal-form-email-input");
    var errorContainer = document.getElementById("logModal-form-error");
    var submitInput = document.getElementById("logModal-form-submit-input");

    var signUp = document.getElementById("signUp")
    var signModal = document.getElementById("signModal-container");
    var signModalClose = document.getElementById("signModal-close");

    signUp.onclick = function() {
        loginModal.style.display = "none";
        signModal.style.display = "block";
    }
    signModalClose.onclick = function() {
        signModal.style.display = "none";
    }

    loginBtn.onclick = function() {
        signModal.style.display = "none";
        loginModal.style.display = "block";
    }
    closeModal.onclick = function() {
        loginModal.style.display = "none";
    }
    loginModal.onclick = function(event) {
        if (event.target == loginModal) {
            loginModal.style.display = "none";
        }
    }
    signModal.onclick = function(event) {
        if (event.target == signModal) {
            signModal.style.display = "none";
        }
    }
    passField.onmouseleave = leftField;
    emailField.onmouseleave = leftField;

    function leftField() {
        var email = emailField.value;
        var pass = passField.value;
        //console.log(email,pass);
        if (email == "" || pass == "") {
            return;
        }

        var flag1 = !validateEmail(email);
        var flag2 = !validatePassword(pass);
        var message = ""
        if (( flag1 || flag2)) {
            submitInput.style.opacity = "0.5"
            submitInput.disabled = true;
            if (flag1) {
                message += "Bad email adress; "
            }
            if (flag2) {
                message += "Your password should be at least 8 symbols, contain 1 uppercase, 1 downcase letter, 1 spec symbol, 1 number"
            }
            errorContainer.innerHTML = message;
            return;
        }
        submitInput.style.opacity = "1.0";
        submitInput.disabled = false;
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






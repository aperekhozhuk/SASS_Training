window.onload = function() {
    var loginModal = document.getElementById("logModal-container");
    var loginBtn = document.getElementById("header-button");
    var closeModal = document.getElementById("logModal-close");
    var signUpToLogin = document.getElementById("signUpToLogin");
    var forgotToLogin = document.getElementById("forgotToLogin");

    var passField = document.getElementById("logModal-form-password-input");
    var emailField = document.getElementById("logModal-form-email-input");
    var logErrorContainer = document.getElementById("logModal-form-error");
    var submitInput = document.getElementById("logModal-form-submit-input");

    var signEmailField = document.getElementById("signModal-form-email-input");
    var signPassField = document.getElementById("signModal-form-password-input");
    var signConfirmPassField = document.getElementById("signModal-form-confirmPassword-input");
    var signErrorContainer = document.getElementById("signModal-form-error");
    var signSubmitInput = document.getElementById("signModal-form-submit-input");

    var signUp = document.getElementById("signUp")
    var signModal = document.getElementById("signModal-container");
    var signModalClose = document.getElementById("signModal-close");

    var forgotBtn = document.getElementById("forgotBtn");
    var forgotModal = document.getElementById("forgotModal-container");
    var forgotClose = document.getElementById("forgotModal-close");
    var forgotEmailInput = document.getElementById("forgotModal-form-email-input");
    var forgotErrorContainer = document.getElementById("forgotModal-form-error");
    var forgotSubmitBtn = document.getElementById("forgotModal-form-submit-input");

    signUp.onclick = function() {
        loginModal.style.display = "none";
        signModal.style.display = "block";
    }
    signModalClose.onclick = function() {
        signModal.style.display = "none";
    }
    loginBtn.onclick = function() {
        signModal.style.display = "none";
        forgotModal.style.display = "none";
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
    signUpToLogin.onclick = loginBtn.onclick;

    forgotBtn.onclick = function() {
        loginModal.style.display = "none";
        forgotModal.style.display = "block"
    }
    forgotClose.onclick = function() {
        forgotModal.style.display = "none";
    }
    forgotModal.onclick = function(event) {
        if (event.target == forgotModal) {
            forgotModal.style.display = "none";
        }
    }
    forgotToLogin.onclick = function() {
        forgotModal.style.display = "none";
        loginModal.style.display = "block";
    }

    passField.onmouseleave = leftField;
    emailField.onmouseleave = leftField;
    signPassField.onmouseleave = leftField;
    signEmailField.onmouseleave = leftField;
    signConfirmPassField.onmouseleave = leftField;
    forgotEmailInput.onmouseleave = leftField;

    function leftField(event) {
        var modalType = event.target.id.split('-')[0];
        var confirmPassword;
        var email;
        var pass;
        var submitBtn;
        var errorContainer;
        if (modalType == 'forgotModal') {
            email = forgotEmailInput.value;
            errorContainer = forgotErrorContainer;
            submitBtn = forgotSubmitBtn;
            pass = "zAglushka1@";
        } else if (modalType == 'signModal') {
            confirmPassword = signConfirmPassField.value;
            if (confirmPassword == "") {
                return;
            }
            email = signEmailField.value;
            pass = signPassField.value;
            errorContainer = signErrorContainer;
            submitBtn = signSubmitInput;
        } else {
            email = emailField.value;
            pass = passField.value;
            errorContainer = logErrorContainer;
            submitBtn = submitInput;
        }
        if (email == "" || pass == "") {
            submitBtn.style.opacity = "0.5";
            submitBtn.disabled = true;
            errorContainer.innerHTML = "";
            return;
        }
        var flag1 = !validateEmail(email);
        var flag2 = !validatePassword(pass);
        var flag3 = ((modalType == 'signModal') && (confirmPassword != pass))
        var message = "";
        if (( flag1 || flag2 || flag3)) {
            submitBtn.style.opacity = "0.5"
            submitBtn.disabled = true;
            if (flag1) {
                message += "Bad email adress"
                if (flag2 || flag3) {
                    message += "; ";
                }
            }
            if (flag2) {
                message += "Your password should be at least 8 symbols, contain 1 uppercase, 1 downcase letter, 1 spec symbol, 1 number"
                if (flag3) {
                    message += "; ";
                }
            }
            if (flag3) {
                message += "Your passwords should match!"
            }
            errorContainer.innerHTML = message;
            return;
        }
        submitBtn.style.opacity = "1.0";
        submitBtn.disabled = false;
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






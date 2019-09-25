window.onload = function() {
    var resetWindow = document.getElementById("resetWindow");
    var closeButton = document.getElementById("reset-close");
    var passInput = document.getElementById("reset-form-password-input");
    var confirmPassInput = document.getElementById("reset-form-confirmPassword-input");
    var errorContainer = document.getElementById("reset-form-error");
    var submitBtn = document.getElementById("reset-form-submit-input");


    closeButton.onclick = function() {
         resetWindow.style.display = "none";
    }

    passInput.onmouseleave = function() {
        var pass = passInput.value;
        var confirmPass = confirmPassInput.value;
        if (pass == "" || confirmPass == "") {
            return;
        }
        var message = "";
        var flag1 = !validatePassword(pass);
        var flag2 = (pass != confirmPass);
        if (flag1 || flag2)  {
            submitBtn.style.opacity = "0.5";
            submitBtn.disabled = true;
            if (flag1) {
                message += "Your password should be at least 8 symbols, contain 1 uppercase, 1 downcase letter, 1 spec symbol, 1 number"
            }
            if (flag2) {
                if (flag1) {
                    message += "; "
                }
                message += "Your passwords didn't match"
            }
            document.getElementById("reset-header").style.marginBottom = "20px";
            errorContainer.innerHTML = message;
            return;
        }
        submitBtn.style.opacity = "1";
        submitBtn.disabled = false;
        errorContainer.innerHTML = "";
        document.getElementById("reset-header").style.marginBottom = "54px";
    }
    confirmPassInput.onmouseleave = passInput.onmouseleave;
}

function validatePassword(pass) {
    let re = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    return re.test(pass);
}

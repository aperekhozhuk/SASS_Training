window.onload=function(){
    var loginModal = document.getElementById("loginModal");
    var loginBtn = document.getElementById("login-button");
    var closeModal = document.getElementById("loginModal-content-close");
    //var loginFormSubmitBtn = document.getElementById("login-form-submit");
    loginBtn.onclick = function() {
        loginModal.style.display = "block";
    }
    closeModal.onclick = function() {
        loginModal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == loginModal) {
            loginModal.style.display = "none";
        }
    }

}





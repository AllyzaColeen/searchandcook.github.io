// side menu starts here

function openSlideMenu() {
    document.getElementById('side-menu').style.width = '200px';
    document.getElementById('main').style.marginLeft = '200px';
}

function closeSlideMenu() {
    document.getElementById('side-menu').style.width = '0';
    document.getElementById('main').style.marginLeft = '0';
}

//sidemenu ends here

//signup pop out starts here 

function popOut() {
    document.getElementById('popSignUp').style.display = "flex";
}

function closeSignUp() {
    document.getElementById('popSignUp').style.display = "none";
    document.getElementById('form').reset();
}
//signup pop out ends here

//Password validation starts here
function validate() {
    var password = document.getElementById("password1").value;
    var confirmPassword = document.getElementById("password2").value;
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var validEmail = mailformat.test(email);

    if (password !== confirmPassword) {
        alert("Password do not match.");
        return false;
    } else if (password == 0 && confirmPassword == 0) {
        alert("Please complete the form");
    } else if (username == 0) {
        alert("Please complete the form");
    } else if (validEmail == false) {
        alert("Please complete the form");
    } else {
        alert("Login feature coming soon. Thank you!")
        document.getElementById('popSignUp').style.display = "none";
        return true;
    }



}
//Password validation ends here
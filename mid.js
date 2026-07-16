const form = document.getElementById("regForm");
 
let wrongAttempts = 0;
let isLocked = false;
 

form.addEventListener("submit", function (event) {
 
    event.preventDefault();
 
    clearErrors();
 
    if (isLocked) {
        document.getElementById("passwordError").innerHTML =
            "Password is locked. Try again after 1 minute.";
        return;
    }
 
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let department = document.getElementById("department");
    let address = document.getElementById("aboutyourself");
    let gender = document.querySelector('input[name="gender"]:checked');
    let skills = document.querySelectorAll('input[name="interests"]:checked');
 
    let valid = true;
 

    if (name.value.trim() == "") {
 
        showError(name, "nameError", "Name is required.");
        valid = false;
 
    }
    else if (!/^[A-Za-z ]+$/.test(name.value.trim())) {
 
        showError(name, "nameError", "Only alphabets are allowed.");
        valid = false;
 
    }
    else {
 
        showSuccess(name);
 
    }
 
    
    if (email.value.trim() == "") {
 
        showError(email, "emailError", "Email is required.");
        valid = false;
 
    }
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
 
        showError(email, "emailError", "Invalid email address.");
        valid = false;
 
    }
    else {
 
        showSuccess(email);
 
    }
    
    if (password.value == "") {
 
        showError(password, "passwordError", "Password is required.");
        valid = false;
 
    }
    else if (password.value != "CSE1234") {
 
        wrongAttempts++;
 
        showError(
            password,
            "passwordError",
            "Wrong Password! Attempt " + wrongAttempts + " of 3."
        );
 
        valid = false;
 
        if (wrongAttempts >= 3) {
 
            isLocked = true;
 
            document.getElementById("passwordError").innerHTML =
                "Too many wrong attempts. Password locked for 1 minute.";
 
            password.disabled = true;
 
            setTimeout(function () {
 
                isLocked = false;
                wrongAttempts = 0;
                password.disabled = false;
 
                document.getElementById("passwordError").innerHTML =
                    "Password unlocked. Try again.";
 
            }, 60000);
 
        }
 
    }
    else {
 
        wrongAttempts = 0;
        showSuccess(password);
 
    }


    if (gender == null) {
 
        document.getElementById("genderError").innerHTML =
            "Please select your gender.";
 
        valid = false;
 
    }
 
    
    if (department.value == "") {
 
        showError(
            department,
            "departmentError",
            "Please select a department."
        );
 
        valid = false;
 
    }
    else {
 
        showSuccess(department);
 
    }

    if (interests.length == 0) {
 
        document.getElementById("interestsError").innerHTML =
            "Select at least one interests.";
 
        valid = false;
 
    }

 
    if (aboutyourself.value.trim() == "") {
 
        showError(aboutyourself, "aboutyourselfError", "Write about yourself is required.");
        valid = false;
 
    }
    else if (aboutyourself.value.trim().length < 20) {
 
        showError(
            aboutyourself,
            "aboutyourselfError",
            "About Yourself must be minimum 20 characters."
        );
 
        valid = false;
 
    }
    else {
 
        showSuccess(aboutyourself);
 
    }
 
    if (valid) {
 
        alert("Registration Successful! Thank you for registering.");
 
        form.reset();
 
        clearErrors();
 
    }
    
 
});
 
function showError(input, errorId, message) {
 
    input.classList.add("errorBorder");
    input.classList.remove("successBorder");
 
    document.getElementById(errorId).innerHTML = message;
 
}
 
function showSuccess(input) {
 
    input.classList.remove("errorBorder");
    input.classList.add("successBorder");
 
}
 

function clearErrors() {
 
    let errors = document.querySelectorAll(".error");
 
    errors.forEach(function (item) {
 
        item.innerHTML = "";
 
    });
 
    let fields = document.querySelectorAll("input, select, textarea");
 
    fields.forEach(function (field) {
 
        field.classList.remove("errorBorder");
        field.classList.remove("successBorder");
 
    });
 
}
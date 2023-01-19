let passwordRequirements = document.querySelector("div.password-requirements");

let passwordMismatch = document.querySelector("div.password-mismatch");

let password = document.querySelector("input#password");

let passwordConfirm = document.querySelector("input#confirm");

// not required can access the passwords with the above. e.g password.value
// let form = document.querySelector("form#sign-up-form");

// password.addEventListener("input", currentPassword);

// passwordConfirm.addEventListener("input", confirmPassword);

// passwordConfirm.addEventListener("focusout", confirmPassword);

let minChars = document.querySelector(".min-chars");

let number = document.querySelector(".number");

let capital = document.querySelector(".capital");

let lowercase = document.querySelector(".lowercase");


// link: https://stackoverflow.com/questions/4220126/run-javascript-function-when-user-finishes-typing-instead-of-on-key-up

let typingTimer;
let doneTyping = 1000;

passwordConfirm.addEventListener("keyup", () => {
    clearTimeout(typingTimer);
    if (passwordConfirm.value) {
        typingTimer = setTimeout(confirmPassword, doneTyping);
    }
});

function confirmPassword(event){
    let password1 = password.value;
    let password2 = passwordConfirm.value;

    if (password1 !== password2) {
        passwordMismatch.classList.remove("hidden");
    }
    
    /*  removed so that when the passwords match the text being hidden
        is not delayed
    */
    // else if (password1 === password2) {
    //     passwordMismatch.classList.add("hidden");
    // }
}



passwordConfirm.addEventListener("input", passwordMatch);

// remove password mismatch text immediately when passwords match
function passwordMatch(event) {
    let password1 = password.value;
    let password2 = passwordConfirm.value;

    if (password1 === password2 && !passwordMismatch.classList.contains("hidden")) {
        passwordMismatch.classList.add("hidden");
    }
}



// show and hide password requirements

password.addEventListener("focus", showPasswordRequirements);

function showPasswordRequirements() {
    passwordRequirements.classList.remove("hidden");
}

password.addEventListener("focusout", hidePasswordRequirements);

function hidePasswordRequirements() {
    passwordRequirements.classList.add("hidden");
}



// check password for requirements

password.addEventListener("input", checkPassword);

function checkPassword(event) {
    let pass = password.value;

    // check for 8 characters
    if (/(?=^.{8,}$)/.test(pass)) {
        minChars.classList.add("matched");
    } else if (!/(?=^.{8,}$)/.test(pass)) {
        minChars.classList.remove("matched");
    }

    // check for 1 number
    if (/(?=.*\d)/.test(pass)) {
        number.classList.add("matched");
    } else if (!/(?=.*\d)/.test(pass)) {
        number.classList.remove("matched");
    }

    // check for 1 capital letter
    if (/(?=.*[A-Z])/.test(pass)) {
        capital.classList.add("matched");
    } else if (!/(?=.*[A-Z])/.test(pass)) {
        capital.classList.remove("matched");
    }

    // check for 1 lowercase letter
    if (/(?=.*[a-z])/.test(pass)) {
        lowercase.classList.add("matched");
    } else if (!/(?=.*[a-z])/.test(pass)) {
        lowercase.classList.remove("matched");
    }

}
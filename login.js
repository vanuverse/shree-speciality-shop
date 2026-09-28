/* =====================================================
   SHREE LOGIN JAVASCRIPT
===================================================== */

const loginForm =
    document.getElementById("loginForm");

const passwordInput =
    document.getElementById("password");

const passwordToggle =
    document.getElementById("passwordToggle");

const loginMessage =
    document.getElementById("loginMessage");



/* =====================================================
   SHOW / HIDE PASSWORD
===================================================== */

passwordToggle.addEventListener(
    "click",
    function () {

        const icon =
            this.querySelector("i");


        if (passwordInput.type === "password") {

            passwordInput.type = "text";

            icon.classList.remove(
                "fa-eye"
            );

            icon.classList.add(
                "fa-eye-slash"
            );

        } else {

            passwordInput.type = "password";

            icon.classList.remove(
                "fa-eye-slash"
            );

            icon.classList.add(
                "fa-eye"
            );

        }

    }
);



/* =====================================================
   LOGIN FORM
===================================================== */

loginForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const email =
            document
                .getElementById("email")
                .value
                .trim();


        const password =
            passwordInput
                .value
                .trim();


        const emailError =
            document.getElementById(
                "emailError"
            );


        const passwordError =
            document.getElementById(
                "passwordError"
            );


        emailError.innerText = "";

        passwordError.innerText = "";

        loginMessage.innerText = "";


        let valid = true;


        /* EMAIL / MOBILE */

        if (email === "") {

            emailError.innerText =
                "Please enter your email or mobile number.";

            valid = false;

        }


        /* PASSWORD */

        if (password === "") {

            passwordError.innerText =
                "Please enter your password.";

            valid = false;

        } else if (password.length < 6) {

            passwordError.innerText =
                "Password must contain at least 6 characters.";

            valid = false;

        }


        if (!valid) {

            return;

        }


        /*
         * Demo login.
         * Later Firebase / backend authentication
         * can be connected here.
         */

        loginMessage.innerText =
            "Logging you in... ♡";

        loginMessage.style.color =
            "#5578c5";


        setTimeout(() => {

            window.location.href =
                "index.html";

        }, 1200);

    }
);



/* =====================================================
   GOOGLE LOGIN
===================================================== */

document
    .getElementById("googleLogin")
    .addEventListener(
        "click",
        function () {

            loginMessage.innerText =
                "Google login will be connected here. ♡";

            loginMessage.style.color =
                "#5578c5";

        }
    );



/* =====================================================
   APPLE LOGIN
===================================================== */

document
    .getElementById("appleLogin")
    .addEventListener(
        "click",
        function () {

            loginMessage.innerText =
                "Apple login will be connected here. ♡";

            loginMessage.style.color =
                "#5578c5";

        }
    );



/* =====================================================
   FORGOT PASSWORD
===================================================== */

document
    .getElementById("forgotPassword")
    .addEventListener(
        "click",
        function (event) {

            event.preventDefault();


            const email =
                document
                    .getElementById("email")
                    .value
                    .trim();


            if (email === "") {

                loginMessage.innerText =
                    "Enter your email or mobile number first.";

                loginMessage.style.color =
                    "#c44949";

                return;

            }


            loginMessage.innerText =
                "Password reset link will be sent to your account. ♡";

            loginMessage.style.color =
                "#5578c5";

        }
    );
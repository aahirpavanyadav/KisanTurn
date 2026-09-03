/* =========================================
   KISAN TURN - GLOBAL JAVASCRIPT
   Works safely across all pages
========================================= */


/* =========================================
   MOBILE MENU
========================================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("show");

    });

}


/* Close mobile menu after clicking a link */

const navItems =
    document.querySelectorAll(".nav-links a");


navItems.forEach((item) => {

    item.addEventListener("click", () => {

        if (navLinks) {

            navLinks.classList.remove("show");

        }

    });

});



/* =========================================
   PASSWORD SHOW / HIDE
========================================= */

const passwordToggles =
    document.querySelectorAll(".password-toggle");


passwordToggles.forEach((button) => {

    button.addEventListener("click", () => {

        const targetId =
            button.dataset.target;


        const passwordInput =
            document.getElementById(targetId);


        if (!passwordInput) return;


        if (passwordInput.type === "password") {

            passwordInput.type = "text";

            button.textContent = "Hide";

        } else {

            passwordInput.type = "password";

            button.textContent = "Show";

        }

    });

});



/* =========================================
   LOGIN FORM
========================================= */

const loginForm =
    document.getElementById("loginForm");


if (loginForm) {

    loginForm.addEventListener(
        "submit",
        (event) => {

            event.preventDefault();


            const mobileInput =
                document.getElementById("loginMobile");


            const passwordInput =
                document.getElementById("loginPassword");


            if (!mobileInput || !passwordInput) {

                return;

            }


            const mobile =
                mobileInput.value.trim();


            const password =
                passwordInput.value;


            /* Validate mobile */

            if (!/^[0-9]{10}$/.test(mobile)) {

                alert(
                    "Please enter a valid 10-digit mobile number."
                );

                return;

            }


            /* Validate password */

            if (password.length < 6) {

                alert(
                    "Password must contain at least 6 characters."
                );

                return;

            }


            /*
             TEMPORARY FRONTEND LOGIN

             Later replace with backend API authentication.
            */


            alert(
                "Login successful! Redirecting to your dashboard."
            );


            window.location.href =
                "dashboard.html";

        }
    );

}



/* =========================================
   REGISTER FORM
========================================= */

const registerForm =
    document.getElementById("registerForm");


if (registerForm) {

    registerForm.addEventListener(
        "submit",
        (event) => {

            event.preventDefault();


            const mobileInput =
                document.getElementById("farmerMobile");


            const passwordInput =
                document.getElementById("registerPassword");


            const confirmPasswordInput =
                document.getElementById("confirmPassword");


            if (
                !mobileInput ||
                !passwordInput ||
                !confirmPasswordInput
            ) {

                return;

            }


            const mobile =
                mobileInput.value.trim();


            const password =
                passwordInput.value;


            const confirmPassword =
                confirmPasswordInput.value;


            /* Validate mobile */

            if (!/^[0-9]{10}$/.test(mobile)) {

                alert(
                    "Please enter a valid 10-digit mobile number."
                );

                return;

            }


            /* Validate password */

            if (password.length < 6) {

                alert(
                    "Password must contain at least 6 characters."
                );

                return;

            }


            /* Check password match */

            if (password !== confirmPassword) {

                alert(
                    "Passwords do not match."
                );

                return;

            }


            /*
             TEMPORARY FRONTEND REGISTRATION

             Later:
             Send farmer data to backend API.
            */


            alert(
                "Registration successful! Please login."
            );


            window.location.href =
                "login.html";

        }
    );

}



/* =========================================
   FORGOT PASSWORD - STEP 1
========================================= */

const forgotPasswordForm =
    document.getElementById(
        "forgotPasswordForm"
    );


const forgotStepOne =
    document.getElementById(
        "forgotStepOne"
    );


const forgotStepTwo =
    document.getElementById(
        "forgotStepTwo"
    );


if (forgotPasswordForm) {

    forgotPasswordForm.addEventListener(
        "submit",
        (event) => {

            event.preventDefault();


            const mobileInput =
                document.getElementById(
                    "forgotMobile"
                );


            if (!mobileInput) {

                return;

            }


            const mobile =
                mobileInput.value.trim();


            /* Validate mobile */

            if (!/^[0-9]{10}$/.test(mobile)) {

                alert(
                    "Please enter a valid 10-digit mobile number."
                );

                return;

            }


            /*
             TEMPORARY ACCOUNT VERIFICATION

             Later replace this with:
             Backend API + OTP verification.
            */


            if (
                forgotStepOne &&
                forgotStepTwo
            ) {

                forgotStepOne.style.display =
                    "none";


                forgotStepTwo.classList.add(
                    "show"
                );

            }

        }
    );

}



/* =========================================
   RESET PASSWORD - STEP 2
========================================= */

const resetPasswordForm =
    document.getElementById(
        "resetPasswordForm"
    );


if (resetPasswordForm) {

    resetPasswordForm.addEventListener(
        "submit",
        (event) => {

            event.preventDefault();


            const newPasswordInput =
                document.getElementById(
                    "newPassword"
                );


            const confirmPasswordInput =
                document.getElementById(
                    "newConfirmPassword"
                );


            if (
                !newPasswordInput ||
                !confirmPasswordInput
            ) {

                return;

            }


            const newPassword =
                newPasswordInput.value;


            const confirmPassword =
                confirmPasswordInput.value;


            /* Validate password */

            if (newPassword.length < 6) {

                alert(
                    "Password must contain at least 6 characters."
                );

                return;

            }


            /* Check password match */

            if (
                newPassword !==
                confirmPassword
            ) {

                alert(
                    "Passwords do not match."
                );

                return;

            }


            /*
             TEMPORARY PASSWORD RESET

             Later send the new password
             securely to your backend.
            */


            alert(
                "Password reset successfully! Please login with your new password."
            );


            window.location.href =
                "login.html";

        }
    );

}



/* =========================================
   ACTIVE NAVIGATION
   Only for index.html sections
========================================= */

const sections =
    document.querySelectorAll(
        "section[id]"
    );


if (
    sections.length > 0 &&
    navItems.length > 0
) {

    window.addEventListener(
        "scroll",
        () => {

            let currentSection = "";


            sections.forEach(
                (section) => {

                    const sectionTop =
                        section.offsetTop - 150;


                    const sectionHeight =
                        section.offsetHeight;


                    if (
                        window.scrollY >=
                            sectionTop &&

                        window.scrollY <
                            sectionTop +
                            sectionHeight
                    ) {

                        currentSection =
                            section.getAttribute(
                                "id"
                            );

                    }

                }
            );


            navItems.forEach(
                (link) => {

                    link.classList.remove(
                        "active"
                    );


                    if (
                        link.getAttribute(
                            "href"
                        ) ===
                        "#" +
                        currentSection
                    ) {

                        link.classList.add(
                            "active"
                        );

                    }

                }
            );

        }
    );

}



/* =========================================
   SAFE BUTTON HANDLING
   Future module buttons
========================================= */

const moduleCards =
    document.querySelectorAll(
        ".module-card"
    );


moduleCards.forEach(
    (card) => {

        card.addEventListener(
            "click",
            () => {

                const link =
                    card.dataset.link;


                if (link) {

                    window.location.href =
                        link;

                }

            }
        );

    }
);
/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.getElementById("menuBtn");

const navLinks = document.getElementById("navLinks");


menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("show");

});


/* Close menu after clicking a link */

const navItems =
    document.querySelectorAll(".nav-links a");


navItems.forEach((item) => {

    item.addEventListener("click", () => {

        navLinks.classList.remove("show");

    });

});



/* =========================
   AUTH MODAL
========================= */

const loginBtn =
    document.getElementById("loginBtn");

const registerBtn =
    document.getElementById("registerBtn");

const trackBtn =
    document.getElementById("trackBtn");

const authModal =
    document.getElementById("authModal");

const closeModal =
    document.getElementById("closeModal");


function openModal() {

    authModal.classList.add("show");

    document.body.style.overflow = "hidden";

}


function closeAuthModal() {

    authModal.classList.remove("show");

    document.body.style.overflow = "";

}


/* Open modal */

loginBtn.addEventListener("click", openModal);

registerBtn.addEventListener("click", openModal);

trackBtn.addEventListener("click", openModal);


/* Close button */

closeModal.addEventListener(
    "click",
    closeAuthModal
);


/* Click outside modal */

authModal.addEventListener(
    "click",
    (event) => {

        if (event.target === authModal) {

            closeAuthModal();

        }

    }
);


/* Escape key */

document.addEventListener(
    "keydown",
    (event) => {

        if (event.key === "Escape") {

            closeAuthModal();

        }

    }
);



/* =========================
   FARMER MODULE BUTTONS
========================= */

const moduleCards =
    document.querySelectorAll(".module-card");


moduleCards.forEach((card) => {

    card.addEventListener("click", () => {

        alert(
            "This farmer module will be available after authentication."
        );

    });

});



/* =========================
   ACTIVE NAVIGATION
========================= */

const sections =
    document.querySelectorAll("section[id]");


window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const top =
            section.offsetTop - 120;

        const height =
            section.offsetHeight;

        if (
            window.scrollY >= top &&
            window.scrollY < top + height
        ) {

            current =
                section.getAttribute("id");

        }

    });


    navItems.forEach((link) => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.classList.add("active");

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


            const mobile =
                document
                    .getElementById("loginMobile")
                    .value
                    .trim();


            const password =
                document
                    .getElementById("loginPassword")
                    .value;


            /* Basic validation */

            if (!/^[0-9]{10}$/.test(mobile)) {

                alert(
                    "Please enter a valid 10-digit mobile number."
                );

                return;

            }


            if (password.length < 6) {

                alert(
                    "Password must contain at least 6 characters."
                );

                return;

            }


            /*
            Temporary frontend login.

            Later replace this with
            backend API authentication.
            */

            alert(
                "Login successful! Redirecting to dashboard."
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


            const mobile =
                document
                    .getElementById("farmerMobile")
                    .value
                    .trim();


            const password =
                document
                    .getElementById("registerPassword")
                    .value;


            const confirmPassword =
                document
                    .getElementById("confirmPassword")
                    .value;


            /* Mobile validation */

            if (!/^[0-9]{10}$/.test(mobile)) {

                alert(
                    "Please enter a valid 10-digit mobile number."
                );

                return;

            }


            /* Password validation */

            if (password.length < 6) {

                alert(
                    "Password must contain at least 6 characters."
                );

                return;

            }


            /* Password match */

            if (password !== confirmPassword) {

                alert(
                    "Passwords do not match."
                );

                return;

            }


            /*
            Temporary frontend registration.

            Later:
            Send this data to backend API.
            */


            alert(
                "Registration successful! You can now login."
            );


            window.location.href =
                "login.html";

        }
    );

}

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
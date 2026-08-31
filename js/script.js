/* ================================
   MOBILE NAVIGATION
================================ */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");


menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("show");

});


/* Close mobile menu when a link is clicked */

const navItems =
    document.querySelectorAll(".nav-links a");


navItems.forEach((item) => {

    item.addEventListener("click", () => {

        navLinks.classList.remove("show");

    });

});



/* ================================
   LOGIN MODAL
================================ */

const loginBtn =
    document.getElementById("loginBtn");

const loginModal =
    document.getElementById("loginModal");

const closeModal =
    document.getElementById("closeModal");

const modalClose =
    document.querySelector(".modal-close");


function openModal() {

    loginModal.classList.add("show");

    document.body.style.overflow = "hidden";

}


function closeLoginModal() {

    loginModal.classList.remove("show");

    document.body.style.overflow = "";

}


loginBtn.addEventListener("click", openModal);


closeModal.addEventListener(
    "click",
    closeLoginModal
);


modalClose.addEventListener(
    "click",
    closeLoginModal
);



/* Close modal when clicking outside */

loginModal.addEventListener("click", (event) => {

    if (event.target === loginModal) {

        closeLoginModal();

    }

});



/* Close modal with Escape key */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        closeLoginModal();

    }

});



/* ================================
   GET STARTED BUTTON
================================ */

const getStartedBtn =
    document.getElementById("getStartedBtn");


getStartedBtn.addEventListener("click", () => {

    openModal();

});



/* ================================
   FUTURE PAGE LINKS
================================ */

const futureLinks =
    document.querySelectorAll(".future-link");


futureLinks.forEach((link) => {

    link.addEventListener("click", (event) => {

        event.preventDefault();

        alert(
            "This module is currently under development."
        );

    });

});



/* ================================
   ACTIVE NAV LINK
================================ */

const sections =
    document.querySelectorAll("section[id]");


window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY <
            sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navItems.forEach((link) => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

});
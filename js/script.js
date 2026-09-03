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
/* =====================================================
   KISAN TURN
   GLOBAL + DASHBOARD JAVASCRIPT
===================================================== */


document.addEventListener(
    "DOMContentLoaded",
    function () {


        /* =============================================
           GLOBAL MOBILE NAVIGATION
        ============================================= */

        const menuBtn =
            document.getElementById("menuBtn");

        const navLinks =
            document.getElementById("navLinks");


        if (menuBtn && navLinks) {


            menuBtn.addEventListener(
                "click",
                function () {

                    navLinks.classList.toggle("show");


                    if (
                        navLinks.classList.contains("show")
                    ) {

                        menuBtn.textContent = "✕";

                    } else {

                        menuBtn.textContent = "☰";

                    }

                }
            );


            const navigationLinks =
                navLinks.querySelectorAll("a");


            navigationLinks.forEach(
                function (link) {

                    link.addEventListener(
                        "click",
                        function () {

                            navLinks.classList.remove("show");

                            menuBtn.textContent = "☰";

                        }
                    );

                }
            );

        }



        /* =============================================
           PASSWORD TOGGLE
           Works on Login/Register/Forgot Password
        ============================================= */

        const passwordToggles =
            document.querySelectorAll(".password-toggle");


        passwordToggles.forEach(
            function (toggle) {


                toggle.addEventListener(
                    "click",
                    function () {


                        const wrapper =
                            toggle.parentElement;


                        const input =
                            wrapper.querySelector("input");


                        if (!input) return;


                        if (
                            input.type === "password"
                        ) {

                            input.type = "text";

                            toggle.textContent = "Hide";

                        } else {

                            input.type = "password";

                            toggle.textContent = "Show";

                        }


                    }
                );


            }
        );



        /* =============================================
           DASHBOARD ELEMENTS
        ============================================= */

        const dashboardSidebar =
            document.getElementById(
                "dashboardSidebar"
            );


        const dashboardMenuBtn =
            document.getElementById(
                "dashboardMenuBtn"
            );


        const sidebarOverlay =
            document.getElementById(
                "sidebarOverlay"
            );


        /* =============================================
           MOBILE SIDEBAR
        ============================================= */

        function openSidebar() {


            if (dashboardSidebar) {

                dashboardSidebar.classList.add("show");

            }


            if (sidebarOverlay) {

                sidebarOverlay.classList.add("show");

            }


            document.body.style.overflow =
                "hidden";

        }



        function closeSidebar() {


            if (dashboardSidebar) {

                dashboardSidebar.classList.remove("show");

            }


            if (sidebarOverlay) {

                sidebarOverlay.classList.remove("show");

            }


            document.body.style.overflow =
                "";

        }



        if (dashboardMenuBtn) {


            dashboardMenuBtn.addEventListener(
                "click",
                function () {

                    openSidebar();

                }
            );

        }



        if (sidebarOverlay) {


            sidebarOverlay.addEventListener(
                "click",
                function () {

                    closeSidebar();

                }
            );

        }



        /* =============================================
           CURRENT DATE
        ============================================= */

        const currentDate =
            document.getElementById(
                "currentDate"
            );


        if (currentDate) {


            const today =
                new Date();


            const options = {

                weekday: "long",

                day: "numeric",

                month: "long",

                year: "numeric"

            };


            currentDate.textContent =
                today.toLocaleDateString(
                    "en-IN",
                    options
                );

        }



        /* =============================================
           NOTIFICATION PANEL
        ============================================= */

        const notificationBtn =
            document.getElementById(
                "notificationBtn"
            );


        const notificationPanel =
            document.getElementById(
                "notificationPanel"
            );


        const closeNotificationPanel =
            document.getElementById(
                "closeNotificationPanel"
            );


        if (
            notificationBtn &&
            notificationPanel
        ) {


            notificationBtn.addEventListener(
                "click",
                function () {

                    notificationPanel.classList.add(
                        "show"
                    );

                }
            );

        }



        if (
            closeNotificationPanel &&
            notificationPanel
        ) {


            closeNotificationPanel.addEventListener(
                "click",
                function () {

                    notificationPanel.classList.remove(
                        "show"
                    );

                }
            );

        }



        /* =============================================
           ALERT CLOSE
        ============================================= */

        const alertClose =
            document.getElementById(
                "alertClose"
            );


        const dashboardAlert =
            document.querySelector(
                ".dashboard-alert"
            );


        if (
            alertClose &&
            dashboardAlert
        ) {


            alertClose.addEventListener(
                "click",
                function () {

                    dashboardAlert.style.transition =
                        "all 0.3s ease";


                    dashboardAlert.style.opacity =
                        "0";


                    dashboardAlert.style.transform =
                        "translateY(-10px)";


                    setTimeout(
                        function () {

                            dashboardAlert.style.display =
                                "none";

                        },
                        300
                    );

                }
            );

        }



        /* =============================================
           TOAST SYSTEM
        ============================================= */

        const dashboardToast =
            document.getElementById(
                "dashboardToast"
            );


        const toastMessage =
            document.getElementById(
                "toastMessage"
            );


        const toastIcon =
            document.getElementById(
                "toastIcon"
            );


        function showToast(
            message,
            icon = "✓"
        ) {


            if (
                !dashboardToast ||
                !toastMessage
            ) {

                return;

            }


            toastMessage.textContent =
                message;


            if (toastIcon) {

                toastIcon.textContent =
                    icon;

            }


            dashboardToast.classList.add(
                "show"
            );


            setTimeout(
                function () {

                    dashboardToast.classList.remove(
                        "show"
                    );

                },
                3000
            );

        }



        /* =============================================
           QUICK ACTIONS
        ============================================= */

        const quickActions =
            document.querySelectorAll(
                ".quick-action"
            );


        quickActions.forEach(
            function (button) {


                button.addEventListener(
                    "click",
                    function () {


                        const action =
                            button.querySelector(
                                "small"
                            );


                        if (!action) return;


                        const actionName =
                            action.textContent.trim();


                        showToast(
                            actionName +
                            " feature will open here.",
                            "🌾"
                        );


                    }
                );


            }
        );



        /* =============================================
           LOGOUT
        ============================================= */

        const logoutBtn =
            document.getElementById(
                "logoutBtn"
            );


        if (logoutBtn) {


            logoutBtn.addEventListener(
                "click",
                function () {


                    const confirmLogout =
                        confirm(
                            "Are you sure you want to logout?"
                        );


                    if (confirmLogout) {


                        window.location.href =
                            "index.html";

                    }


                }
            );

        }



        /* =============================================
           VIEW ALL ACTIVITY
        ============================================= */

        const viewAllActivity =
            document.getElementById(
                "viewAllActivity"
            );


        if (viewAllActivity) {


            viewAllActivity.addEventListener(
                "click",
                function () {

                    showToast(
                        "All activity will be available soon.",
                        "📋"
                    );

                }
            );

        }



        /* =============================================
           LIVE QUEUE SIMULATION

           STATIC PROTOTYPE ONLY

           This simulates queue updates.
           Later replace with backend/API/WebSocket.
        ============================================= */

        const queuePosition =
            document.getElementById(
                "queuePosition"
            );


        const farmersAhead =
            document.getElementById(
                "farmersAhead"
            );


        const farmersAheadAlert =
            document.getElementById(
                "farmersAheadAlert"
            );


        const currentToken =
            document.getElementById(
                "currentToken"
            );


        const waitTime =
            document.getElementById(
                "waitTime"
            );


        const queueProgressFill =
            document.getElementById(
                "queueProgressFill"
            );


        const queueProgressText =
            document.getElementById(
                "queueProgressText"
            );


        let currentPosition = 4;

        let currentFarmersAhead = 3;

        let estimatedWait = 25;

        let progress = 80;

        let currentTokenNumber = 39;



        function updateQueueUI() {


            if (queuePosition) {

                queuePosition.textContent =
                    "#" + currentPosition;

            }


            if (farmersAhead) {

                farmersAhead.textContent =
                    currentFarmersAhead;

            }


            if (farmersAheadAlert) {

                farmersAheadAlert.textContent =
                    currentFarmersAhead;

            }


            if (waitTime) {

                waitTime.textContent =
                    estimatedWait;

            }


            if (queueProgressFill) {

                queueProgressFill.style.width =
                    progress + "%";

            }


            if (queueProgressText) {

                queueProgressText.textContent =
                    progress + "%";

            }


            if (currentToken) {

                const formattedToken =
                    String(
                        currentTokenNumber
                    ).padStart(
                        3,
                        "0"
                    );


                currentToken.textContent =
                    "A-" +
                    formattedToken;

            }

        }



        function simulateQueueUpdate() {


            if (
                !queuePosition ||
                currentPosition <= 1
            ) {

                return;

            }


            currentPosition--;

            currentFarmersAhead--;


            estimatedWait =
                Math.max(
                    5,
                    estimatedWait - 7
                );


            progress =
                Math.min(
                    98,
                    progress + 7
                );


            currentTokenNumber++;


            updateQueueUI();


            showToast(
                "Queue updated! You are now #" +
                currentPosition +
                " in the queue.",
                "📍"
            );


        }



        /*
           DEMO UPDATE:

           Every 30 seconds the prototype
           simulates one farmer being processed.

           Remove this later when connecting
           your real backend.
        */

        if (queuePosition) {


            setInterval(
                simulateQueueUpdate,
                30000
            );

        }



        /* =============================================
           SIDEBAR NAVIGATION ACTIVE STATE
        ============================================= */

        const dashboardNavLinks =
            document.querySelectorAll(
                ".dashboard-nav-link"
            );


        dashboardNavLinks.forEach(
            function (link) {


                link.addEventListener(
                    "click",
                    function () {


                        if (
                            link.tagName === "A" &&
                            link.getAttribute("href") === "#"
                        ) {


                            dashboardNavLinks.forEach(
                                function (item) {

                                    item.classList.remove(
                                        "active"
                                    );

                                }
                            );


                            link.classList.add(
                                "active"
                            );


                            closeSidebar();

                        }


                    }
                );


            }
        );


    }
);
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
/* =====================================================
   KISAN TURN - NOTIFICATION PAGE
===================================================== */


document.addEventListener(
    "DOMContentLoaded",
    function () {


        const markAllReadBtn =
            document.getElementById(
                "markAllReadBtn"
            );


        const clearAllBtn =
            document.getElementById(
                "clearAllBtn"
            );


        const notificationCards =
            document.querySelectorAll(
                "[data-notification]"
            );


        const unreadNotificationCount =
            document.getElementById(
                "unreadNotificationCount"
            );


        const totalNotificationCount =
            document.getElementById(
                "totalNotificationCount"
            );


        const notificationCount =
            document.getElementById(
                "notificationCount"
            );


        const notificationEmptyState =
            document.getElementById(
                "notificationEmptyState"
            );


        /* =============================================
           UPDATE COUNTS
        ============================================= */

        function updateNotificationCounts() {


            const allCards =
                document.querySelectorAll(
                    "[data-notification]"
                );


            const unreadCards =
                document.querySelectorAll(
                    "[data-notification].unread"
                );


            const total =
                allCards.length;


            const unread =
                unreadCards.length;


            if (
                totalNotificationCount
            ) {

                totalNotificationCount.textContent =
                    total;

            }


            if (
                unreadNotificationCount
            ) {

                unreadNotificationCount.textContent =
                    unread;

            }


            if (
                notificationCount
            ) {


                notificationCount.textContent =
                    unread;


                if (unread === 0) {

                    notificationCount.style.display =
                        "none";

                } else {

                    notificationCount.style.display =
                        "grid";

                }

            }


            if (
                notificationEmptyState
            ) {


                if (total === 0) {

                    notificationEmptyState.classList.add(
                        "show"
                    );

                } else {

                    notificationEmptyState.classList.remove(
                        "show"
                    );

                }

            }

        }



        /* =============================================
           MARK SINGLE NOTIFICATION AS READ
        ============================================= */

        document.addEventListener(
            "click",
            function (event) {


                if (
                    event.target.classList.contains(
                        "notification-read-btn"
                    )
                ) {


                    const card =
                        event.target.closest(
                            "[data-notification]"
                        );


                    if (!card) return;


                    card.classList.remove(
                        "unread"
                    );


                    const unreadDot =
                        card.querySelector(
                            ".unread-dot"
                        );


                    if (unreadDot) {

                        unreadDot.remove();

                    }


                    event.target.remove();


                    updateNotificationCounts();


                    if (
                        typeof showToast ===
                        "function"
                    ) {

                        showToast(
                            "Notification marked as read.",
                            "✓"
                        );

                    }

                }


            }
        );



        /* =============================================
           MARK ALL AS READ
        ============================================= */

        if (markAllReadBtn) {


            markAllReadBtn.addEventListener(
                "click",
                function () {


                    const unreadCards =
                        document.querySelectorAll(
                            "[data-notification].unread"
                        );


                    if (
                        unreadCards.length === 0
                    ) {


                        if (
                            typeof showToast ===
                            "function"
                        ) {

                            showToast(
                                "All notifications are already read.",
                                "✓"
                            );

                        }


                        return;

                    }


                    unreadCards.forEach(
                        function (card) {


                            card.classList.remove(
                                "unread"
                            );


                            const unreadDot =
                                card.querySelector(
                                    ".unread-dot"
                                );


                            if (unreadDot) {

                                unreadDot.remove();

                            }


                            const readButton =
                                card.querySelector(
                                    ".notification-read-btn"
                                );


                            if (readButton) {

                                readButton.remove();

                            }


                        }
                    );


                    updateNotificationCounts();


                    if (
                        typeof showToast ===
                        "function"
                    ) {

                        showToast(
                            "All notifications marked as read.",
                            "✓"
                        );

                    }


                }
            );

        }



        /* =============================================
           DELETE SINGLE NOTIFICATION
        ============================================= */

        document.addEventListener(
            "click",
            function (event) {


                if (
                    event.target.classList.contains(
                        "notification-delete-btn"
                    )
                ) {


                    const card =
                        event.target.closest(
                            "[data-notification]"
                        );


                    if (!card) return;


                    card.style.opacity =
                        "0";


                    card.style.transform =
                        "translateX(30px)";


                    setTimeout(
                        function () {

                            card.remove();


                            updateNotificationCounts();


                            if (
                                typeof showToast ===
                                "function"
                            ) {

                                showToast(
                                    "Notification deleted.",
                                    "🗑"
                                );

                            }

                        },
                        250
                    );


                }


            }
        );



        /* =============================================
           CLEAR ALL NOTIFICATIONS
        ============================================= */

        if (clearAllBtn) {


            clearAllBtn.addEventListener(
                "click",
                function () {


                    const cards =
                        document.querySelectorAll(
                            "[data-notification]"
                        );


                    if (
                        cards.length === 0
                    ) {


                        if (
                            typeof showToast ===
                            "function"
                        ) {

                            showToast(
                                "No notifications to clear.",
                                "🔔"
                            );

                        }


                        return;

                    }


                    const confirmClear =
                        confirm(
                            "Are you sure you want to clear all notifications?"
                        );


                    if (!confirmClear) {

                        return;

                    }


                    cards.forEach(
                        function (
                            card,
                            index
                        ) {


                            setTimeout(
                                function () {


                                    card.style.opacity =
                                        "0";


                                    card.style.transform =
                                        "translateX(40px)";


                                    setTimeout(
                                        function () {

                                            card.remove();


                                            updateNotificationCounts();

                                        },
                                        250
                                    );


                                },
                                index * 80
                            );


                        }
                    );


                    setTimeout(
                        function () {


                            if (
                                typeof showToast ===
                                "function"
                            ) {

                                showToast(
                                    "All notifications cleared.",
                                    "🗑"
                                );

                            }


                        },
                        cards.length * 80 + 300
                    );


                }
            );

        }



        /* =============================================
           INITIAL COUNT
        ============================================= */

        updateNotificationCounts();


    }
);
/* =====================================================
   KISAN TURN - SETTINGS PAGE
===================================================== */


document.addEventListener(
    "DOMContentLoaded",
    function () {


        /* =============================================
           SAVE PROFILE
        ============================================= */

        const saveProfileBtn =
            document.getElementById(
                "saveProfileBtn"
            );


        if (saveProfileBtn) {


            saveProfileBtn.addEventListener(
                "click",
                function () {


                    const farmerName =
                        document.getElementById(
                            "farmerName"
                        );


                    const farmerPhone =
                        document.getElementById(
                            "farmerPhone"
                        );


                    if (
                        farmerName.value.trim() === ""
                    ) {


                        showToast(
                            "Please enter your name.",
                            "⚠"
                        );


                        farmerName.focus();

                        return;

                    }


                    if (
                        farmerPhone.value.trim() === ""
                    ) {


                        showToast(
                            "Please enter your mobile number.",
                            "⚠"
                        );


                        farmerPhone.focus();

                        return;

                    }


                    saveProfileBtn.textContent =
                        "Saving...";


                    saveProfileBtn.disabled =
                        true;


                    setTimeout(
                        function () {


                            saveProfileBtn.textContent =
                                "Save Changes";


                            saveProfileBtn.disabled =
                                false;


                            showToast(
                                "Profile updated successfully.",
                                "✓"
                            );


                        },
                        700
                    );


                }
            );

        }



        /* =============================================
           NOTIFICATION SWITCHES
        ============================================= */

        const notificationSwitches =
            document.querySelectorAll(
                ".settings-switch input"
            );


        notificationSwitches.forEach(
            function (toggle) {


                toggle.addEventListener(
                    "change",
                    function () {


                        const option =
                            this.closest(
                                ".settings-option"
                            );


                        const title =
                            option.querySelector(
                                "h4"
                            ).textContent;


                        if (this.checked) {


                            showToast(
                                title +
                                " enabled.",
                                "🔔"
                            );


                        } else {


                            showToast(
                                title +
                                " disabled.",
                                "🔕"
                            );


                        }


                    }
                );


            }
        );



        /* =============================================
           LANGUAGE SELECTION
        ============================================= */

        const languageOptions =
            document.querySelectorAll(
                ".language-option"
            );


        languageOptions.forEach(
            function (button) {


                button.addEventListener(
                    "click",
                    function () {


                        languageOptions.forEach(
                            function (option) {

                                option.classList.remove(
                                    "active"
                                );

                            }
                        );


                        this.classList.add(
                            "active"
                        );


                        const language =
                            this.dataset.language;


                        showToast(
                            language +
                            " selected.",
                            "🌐"
                        );


                    }
                );


            }
        );



        /* =============================================
           DARK / LIGHT MODE
        ============================================= */

        const appearanceOptions =
            document.querySelectorAll(
                ".appearance-option"
            );


        appearanceOptions.forEach(
            function (button) {


                button.addEventListener(
                    "click",
                    function () {


                        appearanceOptions.forEach(
                            function (option) {

                                option.classList.remove(
                                    "active"
                                );

                            }
                        );


                        this.classList.add(
                            "active"
                        );


                        const theme =
                            this.dataset.theme;


                        if (theme === "dark") {


                            document.body.classList.add(
                                "dark-mode"
                            );


                            localStorage.setItem(
                                "kisanTurnTheme",
                                "dark"
                            );


                            showToast(
                                "Dark mode enabled.",
                                "☾"
                            );


                        } else {


                            document.body.classList.remove(
                                "dark-mode"
                            );


                            localStorage.setItem(
                                "kisanTurnTheme",
                                "light"
                            );


                            showToast(
                                "Light mode enabled.",
                                "☀"
                            );


                        }


                    }
                );


            }
        );



        /* =============================================
           LOAD SAVED THEME
        ============================================= */

        const savedTheme =
            localStorage.getItem(
                "kisanTurnTheme"
            );


        if (
            savedTheme === "dark"
        ) {


            document.body.classList.add(
                "dark-mode"
            );


            appearanceOptions.forEach(
                function (option) {

                    option.classList.remove(
                        "active"
                    );

                }
            );


            const darkOption =
                document.querySelector(
                    '[data-theme="dark"]'
                );


            if (darkOption) {

                darkOption.classList.add(
                    "active"
                );

            }


        }



        /* =============================================
           PASSWORD MODAL
        ============================================= */

        const changePasswordBtn =
            document.getElementById(
                "changePasswordBtn"
            );


        const passwordModal =
            document.getElementById(
                "passwordModal"
            );


        const closePasswordModal =
            document.getElementById(
                "closePasswordModal"
            );


        if (changePasswordBtn) {


            changePasswordBtn.addEventListener(
                "click",
                function () {


                    passwordModal.classList.add(
                        "show"
                    );


                }
            );

        }


        if (closePasswordModal) {


            closePasswordModal.addEventListener(
                "click",
                function () {


                    passwordModal.classList.remove(
                        "show"
                    );


                }
            );

        }



        /* CLOSE MODAL ON BACKGROUND CLICK */

        if (passwordModal) {


            passwordModal.addEventListener(
                "click",
                function (event) {


                    if (
                        event.target === passwordModal
                    ) {


                        passwordModal.classList.remove(
                            "show"
                        );


                    }


                }
            );

        }



        /* =============================================
           UPDATE PASSWORD
        ============================================= */

        const updatePasswordBtn =
            document.getElementById(
                "updatePasswordBtn"
            );


        if (updatePasswordBtn) {


            updatePasswordBtn.addEventListener(
                "click",
                function () {


                    const currentPassword =
                        document.getElementById(
                            "currentPassword"
                        );


                    const newPassword =
                        document.getElementById(
                            "newPassword"
                        );


                    const confirmPassword =
                        document.getElementById(
                            "confirmPassword"
                        );


                    if (
                        currentPassword.value === "" ||
                        newPassword.value === "" ||
                        confirmPassword.value === ""
                    ) {


                        showToast(
                            "Please fill all password fields.",
                            "⚠"
                        );


                        return;

                    }


                    if (
                        newPassword.value.length < 6
                    ) {


                        showToast(
                            "Password must be at least 6 characters.",
                            "⚠"
                        );


                        return;

                    }


                    if (
                        newPassword.value !==
                        confirmPassword.value
                    ) {


                        showToast(
                            "Passwords do not match.",
                            "⚠"
                        );


                        return;

                    }


                    updatePasswordBtn.textContent =
                        "Updating...";


                    updatePasswordBtn.disabled =
                        true;


                    setTimeout(
                        function () {


                            updatePasswordBtn.textContent =
                                "Update Password";


                            updatePasswordBtn.disabled =
                                false;


                            passwordModal.classList.remove(
                                "show"
                            );


                            currentPassword.value = "";

                            newPassword.value = "";

                            confirmPassword.value = "";


                            showToast(
                                "Password updated successfully.",
                                "✓"
                            );


                        },
                        800
                    );


                }
            );

        }



        /* =============================================
           SETTINGS LOGOUT
        ============================================= */

        const settingsLogoutBtn =
            document.getElementById(
                "settingsLogoutBtn"
            );


        if (settingsLogoutBtn) {


            settingsLogoutBtn.addEventListener(
                "click",
                function () {


                    const confirmLogout =
                        confirm(
                            "Are you sure you want to logout?"
                        );


                    if (!confirmLogout) {

                        return;

                    }


                    showToast(
                        "Logging out...",
                        "↪"
                    );


                    setTimeout(
                        function () {

                            window.location.href =
                                "index.html";

                        },
                        700
                    );


                }
            );

        }


    }
);
/* =========================================================
   KISAN TURN - PROCUREMENT FLOW
   Aadhaar Demo Verification + OTP + Validation
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("ktProcurementForm");

    /* Stop if this is not procurement.html */
    if (!form) return;


    /* =====================================================
       ELEMENTS
    ===================================================== */

    const farmerName =
        document.getElementById("ktFarmerName");

    const mobileNumber =
        document.getElementById("ktMobileNumber");

    const aadhaarNumber =
        document.getElementById("ktAadhaarNumber");

    const verifyAadhaarBtn =
        document.getElementById("ktVerifyAadhaarBtn");

    const verificationStatus =
        document.getElementById("ktVerificationStatus");

    const otpPanel =
        document.getElementById("ktOtpPanel");

    const otpInputs =
        Array.from(
            document.querySelectorAll(".kt-otp-input")
        );

    const verifyOtpBtn =
        document.getElementById("ktVerifyOtpBtn");

    const resendOtpBtn =
        document.getElementById("ktResendOtpBtn");

    const otpTimer =
        document.getElementById("ktOtpTimer");

    const demoOtp =
        document.getElementById("ktDemoOtp");

    const detailsWrapper =
        document.getElementById("ktDetailsWrapper");

    const lockMessage =
        document.getElementById("ktLockMessage");

    const ifscCode =
        document.getElementById("ktIfscCode");

    const bankName =
        document.getElementById("ktBankName");

    const accountNumber =
        document.getElementById("ktAccountNumber");

    const state =
        document.getElementById("ktState");

    const district =
        document.getElementById("ktDistrict");

    const mandal =
        document.getElementById("ktMandal");

    const toggleAccount =
        document.getElementById("ktToggleAccount");

    const successModal =
        document.getElementById("ktSuccessModal");

    const goDashboardBtn =
        document.getElementById("ktGoDashboardBtn");


    /* =====================================================
       STATE
    ===================================================== */

    let generatedOTP = "";
    let aadhaarVerified = false;
    let otpSeconds = 120;
    let otpTimerInterval = null;


    /* =====================================================
       HELPERS
    ===================================================== */

    function getField(input) {
        return input.closest(".kt-field");
    }


    function showError(input, message) {

        const field = getField(input);

        if (!field) return;

        field.classList.remove("is-success");
        field.classList.add("is-error");

        const error =
            field.querySelector(".kt-field-error");

        if (error) {
            error.textContent = message;
        }

    }


    function clearError(input) {

        const field = getField(input);

        if (!field) return;

        field.classList.remove("is-error");

        const error =
            field.querySelector(".kt-field-error");

        if (error) {
            error.textContent = "";
        }

    }


    function setFieldSuccess(input) {

        const field = getField(input);

        if (!field) return;

        field.classList.remove("is-error");
        field.classList.add("is-success");

    }


    function showStatus(message, type) {

        verificationStatus.textContent = message;

        verificationStatus.className =
            "kt-verification-status show " + type;

    }


    function generateOTP() {

        return Math.floor(
            100000 + Math.random() * 900000
        ).toString();

    }


    /* =====================================================
       FORMAT MOBILE
    ===================================================== */

    mobileNumber.addEventListener("input", function () {

        this.value =
            this.value
                .replace(/\D/g, "")
                .slice(0, 10);

        clearError(this);

    });


    /* =====================================================
       FORMAT AADHAAR
    ===================================================== */

    aadhaarNumber.addEventListener("input", function () {

        let value =
            this.value
                .replace(/\D/g, "")
                .slice(0, 12);

        this.value =
            value.replace(
                /(\d{4})(?=\d)/g,
                "$1 "
            );

        clearError(this);

    });


    /* =====================================================
       FORMAT IFSC
    ===================================================== */

    ifscCode.addEventListener("input", function () {

        this.value =
            this.value
                .replace(/[^a-zA-Z0-9]/g, "")
                .toUpperCase()
                .slice(0, 11);

        clearError(this);

    });


    /* =====================================================
       LIVE ERROR CLEAR
    ===================================================== */

    [
        farmerName,
        mobileNumber,
        aadhaarNumber,
        bankName,
        accountNumber,
        ifscCode,
        state,
        district,
        mandal
    ].forEach(function (input) {

        if (!input) return;

        input.addEventListener("input", function () {
            clearError(this);
        });

        input.addEventListener("change", function () {
            clearError(this);
        });

    });


    /* =====================================================
       VALIDATE IDENTITY
    ===================================================== */

    function validateIdentity() {

        let valid = true;

        const name =
            farmerName.value.trim();

        const mobile =
            mobileNumber.value.trim();

        const aadhaar =
            aadhaarNumber.value
                .replace(/\s/g, "");


        if (name.length < 3) {

            showError(
                farmerName,
                "Please enter your full name."
            );

            valid = false;

        }


        if (!/^[6-9]\d{9}$/.test(mobile)) {

            showError(
                mobileNumber,
                "Enter a valid 10-digit mobile number."
            );

            valid = false;

        }


        if (!/^\d{12}$/.test(aadhaar)) {

            showError(
                aadhaarNumber,
                "Enter a valid 12-digit Aadhaar number."
            );

            valid = false;

        }

        return valid;

    }


    /* =====================================================
       OTP TIMER
    ===================================================== */

    function startOtpTimer() {

        clearInterval(otpTimerInterval);

        otpSeconds = 120;

        updateOtpTimer();


        otpTimerInterval =
            setInterval(function () {

                otpSeconds--;

                updateOtpTimer();


                if (otpSeconds <= 0) {

                    clearInterval(
                        otpTimerInterval
                    );

                    otpTimer.textContent =
                        "OTP Expired";

                    demoOtp.textContent =
                        "OTP expired. Please resend OTP.";

                }

            }, 1000);

    }


    function updateOtpTimer() {

        const minutes =
            Math.floor(otpSeconds / 60)
                .toString()
                .padStart(2, "0");

        const seconds =
            (otpSeconds % 60)
                .toString()
                .padStart(2, "0");

        otpTimer.textContent =
            minutes + ":" + seconds;

    }


    /* =====================================================
       SEND OTP
    ===================================================== */

    function sendOTP() {

        generatedOTP = generateOTP();

        otpInputs.forEach(function (input) {
            input.value = "";
            input.classList.remove("error");
        });


        otpPanel.classList.add("show");

        startOtpTimer();


        /*
           STATIC SIH DEMO ONLY

           For production:
           OTP must be generated and verified
           through a secure authorized backend.
        */

        demoOtp.textContent =
            "Demo OTP: " + generatedOTP;


        setTimeout(function () {

            otpInputs[0].focus();

        }, 350);

    }


    /* =====================================================
       VERIFY AADHAAR BUTTON
    ===================================================== */

    verifyAadhaarBtn.addEventListener(
        "click",
        function () {

            if (!validateIdentity()) {

                showStatus(
                    "Please correct the highlighted details.",
                    "error"
                );

                return;

            }


            /* Loading animation */

            verifyAadhaarBtn.classList.add(
                "loading"
            );

            verifyAadhaarBtn.disabled = true;


            setTimeout(function () {

                verifyAadhaarBtn.classList.remove(
                    "loading"
                );

                verifyAadhaarBtn.disabled = false;


                showStatus(
                    "OTP sent successfully. Enter the verification code.",
                    "success"
                );


                sendOTP();

            }, 700);

        }
    );


    /* =====================================================
       OTP INPUT BEHAVIOUR
    ===================================================== */

    otpInputs.forEach(function (input, index) {

        input.addEventListener(
            "input",
            function () {

                this.value =
                    this.value
                        .replace(/\D/g, "")
                        .slice(-1);

                this.classList.remove("error");


                if (
                    this.value &&
                    index < otpInputs.length - 1
                ) {

                    otpInputs[index + 1].focus();

                }

            }
        );


        input.addEventListener(
            "keydown",
            function (event) {

                if (
                    event.key === "Backspace" &&
                    !this.value &&
                    index > 0
                ) {

                    otpInputs[index - 1].focus();

                }


                if (
                    event.key === "ArrowLeft" &&
                    index > 0
                ) {

                    otpInputs[index - 1].focus();

                }


                if (
                    event.key === "ArrowRight" &&
                    index <
                    otpInputs.length - 1
                ) {

                    otpInputs[index + 1].focus();

                }

            }
        );


        /* OTP PASTE */

        input.addEventListener(
            "paste",
            function (event) {

                event.preventDefault();

                const pasted =
                    (
                        event.clipboardData ||
                        window.clipboardData
                    )
                    .getData("text")
                    .replace(/\D/g, "")
                    .slice(0, 6);


                if (!pasted) return;


                pasted
                    .split("")
                    .forEach(function (
                        character,
                        pastedIndex
                    ) {

                        if (
                            otpInputs[
                                pastedIndex
                            ]
                        ) {

                            otpInputs[
                                pastedIndex
                            ].value =
                                character;

                        }

                    });


                const focusIndex =
                    Math.min(
                        pasted.length,
                        otpInputs.length - 1
                    );

                otpInputs[
                    focusIndex
                ].focus();

            }
        );

    });


    /* =====================================================
       GET OTP
    ===================================================== */

    function getEnteredOTP() {

        return otpInputs
            .map(function (input) {
                return input.value;
            })
            .join("");

    }


    /* =====================================================
       VERIFY OTP
    ===================================================== */

    verifyOtpBtn.addEventListener(
        "click",
        function () {

            const enteredOTP =
                getEnteredOTP();


            if (otpSeconds <= 0) {

                demoOtp.textContent =
                    "OTP expired. Please resend a new OTP.";

                return;

            }


            if (enteredOTP.length !== 6) {

                demoOtp.textContent =
                    "Please enter all 6 digits.";

                otpInputs.forEach(
                    function (input) {

                        if (!input.value) {
                            input.classList.add("error");
                        }

                    }
                );

                return;

            }


            if (enteredOTP !== generatedOTP) {

                demoOtp.textContent =
                    "Incorrect OTP. Please try again.";

                otpInputs.forEach(
                    function (input) {

                        input.value = "";
                        input.classList.add("error");

                    }
                );

                otpInputs[0].focus();

                return;

            }


            /* =================================================
               VERIFICATION SUCCESS
            ================================================= */

            aadhaarVerified = true;

            clearInterval(otpTimerInterval);


            showStatus(
                "✓ Aadhaar verification completed successfully.",
                "success"
            );


            setFieldSuccess(aadhaarNumber);


            /* Lock identity */

            farmerName.disabled = true;
            mobileNumber.disabled = true;
            aadhaarNumber.disabled = true;


            verifyAadhaarBtn.disabled = true;

            verifyAadhaarBtn.innerHTML =
                "<span>Verified ✓</span>";


            /* Hide OTP */

            otpPanel.classList.remove("show");


            /* Unlock details */

            detailsWrapper.classList.add(
                "unlocked"
            );


            lockMessage.style.display =
                "none";


            [
                bankName,
                accountNumber,
                ifscCode,
                state,
                district,
                mandal
            ].forEach(function (input) {

                input.disabled = false;

            });


            /* Progress */

            document
                .querySelector(
                    '.kt-progress-step[data-step="1"]'
                )
                .classList.remove("active");


            document
                .querySelector(
                    '.kt-progress-step[data-step="1"]'
                )
                .classList.add("completed");


            document
                .querySelector(
                    '.kt-progress-step[data-step="2"]'
                )
                .classList.add("active");


            setTimeout(function () {

                bankName.focus();

            }, 300);

        }
    );


    /* =====================================================
       RESEND OTP
    ===================================================== */

    resendOtpBtn.addEventListener(
        "click",
        function () {

            sendOTP();

            demoOtp.textContent =
                "New Demo OTP: " +
                generatedOTP;

        }
    );


    /* =====================================================
       ACCOUNT SHOW/HIDE
    ===================================================== */

    toggleAccount.addEventListener(
        "click",
        function () {

            const isPassword =
                accountNumber.type === "password";


            accountNumber.type =
                isPassword
                    ? "text"
                    : "password";


            toggleAccount.textContent =
                isPassword
                    ? "Hide"
                    : "Show";

        }
    );


    /* =====================================================
       IFSC VALIDATION
    ===================================================== */

    function validateIFSC() {

        /*
            Standard format:
            ABCD0XXXXXX

            4 letters
            5th character always 0
            Last 6 characters alphanumeric
        */

        const ifscPattern =
            /^[A-Z]{4}0[A-Z0-9]{6}$/;


        if (
            !ifscPattern.test(
                ifscCode.value.trim()
            )
        ) {

            showError(
                ifscCode,
                "Enter a valid IFSC format. Example: SBIN0001234"
            );

            return false;

        }


        return true;

    }


    /* =====================================================
       VALIDATE DETAILS
    ===================================================== */

    function validateDetails() {

        let valid = true;


        if (
            bankName.value.trim().length < 2
        ) {

            showError(
                bankName,
                "Please enter a valid bank name."
            );

            valid = false;

        }


        if (
            accountNumber.value
                .replace(/\s/g, "")
                .length < 8
        ) {

            showError(
                accountNumber,
                "Enter a valid account number."
            );

            valid = false;

        }


        if (!validateIFSC()) {

            valid = false;

        }


        if (!state.value) {

            showError(
                state,
                "Please select your state."
            );

            valid = false;

        }


        if (
            district.value.trim().length < 2
        ) {

            showError(
                district,
                "Please enter your district."
            );

            valid = false;

        }


        if (
            mandal.value.trim().length < 2
        ) {

            showError(
                mandal,
                "Please enter your mandal."
            );

            valid = false;

        }


        return valid;

    }


    /* =====================================================
       SUBMIT FORM
    ===================================================== */

    form.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            if (!aadhaarVerified) {

                showStatus(
                    "Please complete Aadhaar verification first.",
                    "error"
                );

                return;

            }


            if (!validateDetails()) {

                return;

            }


            /* Progress Step 3 */

            document
                .querySelector(
                    '.kt-progress-step[data-step="2"]'
                )
                .classList.remove("active");


            document
                .querySelector(
                    '.kt-progress-step[data-step="2"]'
                )
                .classList.add("completed");


            document
                .querySelector(
                    '.kt-progress-step[data-step="3"]'
                )
                .classList.add("active");


            /* Show success */

            setTimeout(function () {

                successModal.classList.add(
                    "show"
                );

            }, 250);

        }
    );


    /* =====================================================
       RESET FORM
    ===================================================== */

    form.addEventListener(
        "reset",
        function () {

            setTimeout(function () {

                aadhaarVerified = false;

                generatedOTP = "";

                clearInterval(
                    otpTimerInterval
                );


                /* Reset identity */

                farmerName.disabled = false;
                mobileNumber.disabled = false;
                aadhaarNumber.disabled = false;


                /* Reset button */

                verifyAadhaarBtn.disabled = false;

                verifyAadhaarBtn.innerHTML = `
                    <span class="kt-btn-text">
                        Verify Aadhaar
                    </span>
                    <span class="kt-btn-loader"></span>
                `;


                /* Reset OTP */

                otpPanel.classList.remove(
                    "show"
                );

                otpInputs.forEach(
                    function (input) {

                        input.value = "";
                        input.classList.remove("error");

                    }
                );


                /* Reset details */

                detailsWrapper.classList.remove(
                    "unlocked"
                );


                lockMessage.style.display =
                    "flex";


                [
                    bankName,
                    accountNumber,
                    ifscCode,
                    state,
                    district,
                    mandal
                ].forEach(function (input) {

                    input.disabled = true;

                });


                /* Reset messages */

                verificationStatus.className =
                    "kt-verification-status";

                verificationStatus.textContent = "";

                demoOtp.textContent = "";


                /* Reset errors */

                document
                    .querySelectorAll(
                        ".kt-field"
                    )
                    .forEach(function (field) {

                        field.classList.remove(
                            "is-error",
                            "is-success"
                        );

                        const error =
                            field.querySelector(
                                ".kt-field-error"
                            );

                        if (error) {
                            error.textContent = "";
                        }

                    });


                /* Reset progress */

                document
                    .querySelectorAll(
                        ".kt-progress-step"
                    )
                    .forEach(function (step) {

                        step.classList.remove(
                            "active",
                            "completed"
                        );

                    });


                document
                    .querySelector(
                        '.kt-progress-step[data-step="1"]'
                    )
                    .classList.add("active");

            }, 0);

        }
    );


    /* =====================================================
       GO TO DASHBOARD
    ===================================================== */

    goDashboardBtn.addEventListener(
        "click",
        function () {

            window.location.href =
                "dashboard.html";

        }
    );


    /* Close modal by clicking background */

    successModal.addEventListener(
        "click",
        function (event) {

            if (event.target === successModal) {

                successModal.classList.remove(
                    "show"
                );

            }

        }
    );

});
/* =========================================================
   KISAN TURN - DASHBOARD PROCUREMENT STATUS
   Add below existing script.js code
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const dashboardPage =
        document.querySelector(".kt-dashboard-page");

    /* Only run on dashboard */
    if (!dashboardPage) return;


    /* =====================================================
       ELEMENTS
    ===================================================== */

    const requestCount =
        document.getElementById("ktRequestCount");

    const identityStatus =
        document.getElementById("ktIdentityStatus");

    const currentStatus =
        document.getElementById("ktCurrentStatus");

    const procurementTitle =
        document.getElementById("ktProcurementTitle");

    const procurementDescription =
        document.getElementById(
            "ktProcurementDescription"
        );

    const statusPill =
        document.getElementById("ktStatusPill");

    const activityList =
        document.getElementById("ktActivityList");

    const clearActivity =
        document.getElementById("ktClearActivity");

    const progressItems =
        document.querySelectorAll(
            ".kt-dashboard-progress-item"
        );

    const progressLines =
        document.querySelectorAll(
            ".kt-dashboard-progress-line"
        );


    /* =====================================================
       GET PROCUREMENT DATA
    ===================================================== */

    const procurementData =
        JSON.parse(
            localStorage.getItem(
                "kisanTurnProcurement"
            )
        );


    /* =====================================================
       NO PROCUREMENT
    ===================================================== */

    if (!procurementData) {

        if (requestCount) {
            requestCount.textContent = "0";
        }

        if (identityStatus) {
            identityStatus.textContent =
                "Not Verified";
        }

        if (currentStatus) {
            currentStatus.textContent =
                "Not Started";
        }

        return;

    }


    /* =====================================================
       PROCUREMENT EXISTS
    ===================================================== */

    if (requestCount) {
        requestCount.textContent = "1";
    }

    if (identityStatus) {
        identityStatus.textContent =
            "Verified";
    }

    if (currentStatus) {
        currentStatus.textContent =
            "Processing";
    }

    if (procurementTitle) {
        procurementTitle.textContent =
            "Procurement Request Active";
    }

    if (procurementDescription) {
        procurementDescription.textContent =
            "Your procurement request has been submitted and is currently being processed.";
    }


    /* =====================================================
       STATUS PILL
    ===================================================== */

    if (statusPill) {

        statusPill.className =
            "kt-status-pill processing";

        statusPill.innerHTML =
            "<span></span> Processing";

    }


    /* =====================================================
       PROGRESS UPDATE
    ===================================================== */

    progressItems.forEach(
        function (item, index) {

            if (index <= 2) {

                item.classList.add(
                    "completed"
                );

            }

        }
    );


    progressLines.forEach(
        function (line, index) {

            if (index < 2) {

                line.classList.add(
                    "completed"
                );

            }

        }
    );


    /* =====================================================
       ACTIVITY
    ===================================================== */

    if (activityList) {

        activityList.innerHTML = `

            <div class="kt-activity-item">

                <div class="kt-activity-icon">
                    ✓
                </div>

                <div class="kt-activity-content">

                    <strong>
                        Procurement request submitted
                    </strong>

                    <span>
                        Your request is currently under processing.
                    </span>

                </div>

            </div>


            <div class="kt-activity-item">

                <div class="kt-activity-icon">
                    👤
                </div>

                <div class="kt-activity-content">

                    <strong>
                        Identity verified
                    </strong>

                    <span>
                        Aadhaar verification completed successfully.
                    </span>

                </div>

            </div>


            <div class="kt-activity-item">

                <div class="kt-activity-icon">
                    📋
                </div>

                <div class="kt-activity-content">

                    <strong>
                        Registration completed
                    </strong>

                    <span>
                        Procurement details were successfully submitted.
                    </span>

                </div>

            </div>

        `;

    }


    /* =====================================================
       CLEAR ACTIVITY
    ===================================================== */

    if (clearActivity) {

        clearActivity.addEventListener(
            "click",
            function () {

                if (!activityList) return;

                activityList.innerHTML = `

                    <div class="kt-empty-activity">

                        <div>
                            📋
                        </div>

                        <strong>
                            No activity yet
                        </strong>

                        <p>
                            Your future procurement updates will appear here.
                        </p>

                    </div>

                `;

            }
        );

    }

});
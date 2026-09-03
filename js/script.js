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
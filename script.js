// =========================================================
// NAVBAR
// =========================================================

document.addEventListener("DOMContentLoaded", function () {

    const navLinks = document.querySelectorAll(".nav-link");
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");


    // =====================================================
    // NAVBAR ACTIVE
    // =====================================================

    function setActiveNav() {

        const currentHash = window.location.hash || "#home";

        navLinks.forEach(function (link) {

            link.classList.remove("active");

            if (link.getAttribute("href") === currentHash) {
                link.classList.add("active");
            }

        });

    }


    // Jalankan ketika pertama kali halaman dibuka
    setActiveNav();


    // Jalankan ketika hash berubah
    window.addEventListener("hashchange", setActiveNav);


    // =====================================================
    // MOBILE MENU
    // =====================================================

    if (menuToggle && navMenu) {

        // -----------------------------------------------
        // Klik tombol hamburger
        // -----------------------------------------------

        menuToggle.addEventListener("click", function (event) {

            event.stopPropagation();

            const isOpen = navMenu.classList.toggle("active");

            menuToggle.classList.toggle("active", isOpen);

            menuToggle.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

        });


        // -----------------------------------------------
        // Klik menu
        // -----------------------------------------------

        navLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                navMenu.classList.remove("active");
                menuToggle.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });


        // -----------------------------------------------
        // Klik di luar menu
        // -----------------------------------------------

        document.addEventListener("click", function (event) {

            const clickedInsideMenu =
                navMenu.contains(event.target);

            const clickedToggle =
                menuToggle.contains(event.target);


            if (!clickedInsideMenu && !clickedToggle) {

                navMenu.classList.remove("active");
                menuToggle.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        });


        // -----------------------------------------------
        // Tekan tombol ESC
        // -----------------------------------------------

        document.addEventListener("keydown", function (event) {

            if (event.key === "Escape") {

                navMenu.classList.remove("active");
                menuToggle.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        });

    }


    // =====================================================
    // TUTUP MENU KETIKA RESIZE KE DESKTOP
    // =====================================================

    window.addEventListener("resize", function () {

        if (window.innerWidth > 768 && navMenu && menuToggle) {

            navMenu.classList.remove("active");
            menuToggle.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    });

});

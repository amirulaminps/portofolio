// =========================================================
// NAVBAR
// =========================================================

const navLinks = document.querySelectorAll('.nav-link');
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');


// =========================================================
// NAVBAR ACTIVE
// =========================================================

function setActiveNav() {

    const currentHash =
        window.location.hash || '#home';

    navLinks.forEach(link => {

        link.classList.remove('active');

        if (
            link.getAttribute('href') === currentHash
        ) {
            link.classList.add('active');
        }

    });

}


// Jalankan ketika halaman pertama dibuka
setActiveNav();


// Jalankan ketika hash berubah
window.addEventListener(
    'hashchange',
    setActiveNav
);


// =========================================================
// MOBILE MENU
// =========================================================

if (menuToggle && navMenu) {


    // -----------------------------------------------------
    // BUKA / TUTUP HAMBURGER
    // -----------------------------------------------------

    menuToggle.addEventListener(
        'click',
        function (event) {

            event.stopPropagation();

            navMenu.classList.toggle('active');

            menuToggle.classList.toggle('active');

        }
    );


    // -----------------------------------------------------
    // KLIK MENU
    // -----------------------------------------------------

    navLinks.forEach(link => {

        link.addEventListener(
            'click',
            function () {

                navMenu.classList.remove('active');

                menuToggle.classList.remove('active');

            }
        );

    });


    // -----------------------------------------------------
    // KLIK DI LUAR MENU
    // -----------------------------------------------------

    document.addEventListener(
        'click',
        function (event) {

            if (
                !navMenu.contains(event.target) &&
                !menuToggle.contains(event.target)
            ) {

                navMenu.classList.remove('active');

                menuToggle.classList.remove('active');

            }

        }
    );

}


// =========================================================
// TUTUP MENU KETIKA RESIZE KE DESKTOP
// =========================================================

window.addEventListener(
    'resize',
    function () {

        if (window.innerWidth > 850) {

            navMenu?.classList.remove('active');

            menuToggle?.classList.remove('active');

        }

    }
);


// =========================================================
// TUTUP MENU KETIKA KLIK LINK
// =========================================================

document.querySelectorAll(
    'a[href^="#"]'
).forEach(link => {

    link.addEventListener(
        'click',
        function () {

            const target =
                this.getAttribute('href');

            if (target) {

                setTimeout(
                    function () {

                        navMenu?.classList.remove(
                            'active'
                        );

                        menuToggle?.classList.remove(
                            'active'
                        );

                    },
                    100
                );

            }

        }
    );

});

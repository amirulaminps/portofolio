// =========================================================
// NAVBAR
// =========================================================

const navLinks = document.querySelectorAll('.nav-link');
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');


// =========================================================
// NAVBAR ACTIVE
// =========================================================

function setActiveNav() {

    const currentHash = window.location.hash || '#home';

    navLinks.forEach(link => {

        link.classList.remove('active');

        if (link.getAttribute('href') === currentHash) {
            link.classList.add('active');
        }

    });

}


// Saat halaman pertama dibuka
setActiveNav();


// Saat hash berubah
window.addEventListener('hashchange', setActiveNav);


// =========================================================
// MOBILE MENU
// =========================================================

if (menuToggle && navMenu) {

    // Buka / tutup menu
    menuToggle.addEventListener('click', function (event) {

        event.stopPropagation();

        navMenu.classList.toggle('active');

    });


    // Klik menu → tutup menu
    navLinks.forEach(link => {

        link.addEventListener('click', function () {

            navMenu.classList.remove('active');

        });

    });


    // Klik di luar menu → tutup menu
    document.addEventListener('click', function (event) {

        if (
            !navMenu.contains(event.target) &&
            !menuToggle.contains(event.target)
        ) {

            navMenu.classList.remove('active');

        }

    });

}

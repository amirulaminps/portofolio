// ===============================
// NAVBAR
// ===============================

const navLinks = document.querySelectorAll('.nav-link');
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');


// ===============================
// NAVBAR ACTIVE
// ===============================

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


// Saat pindah section
window.addEventListener('hashchange', setActiveNav);


// ===============================
// MOBILE MENU
// ===============================

if (menuToggle && navMenu) {

    // Klik tombol hamburger
    menuToggle.addEventListener('click', function () {
        navMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });


    // Klik menu → tutup navbar
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });


    // Klik di luar menu → tutup
    document.addEventListener('click', function (event) {

        if (
            !navMenu.contains(event.target) &&
            !menuToggle.contains(event.target)
        ) {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
        }

    });

}

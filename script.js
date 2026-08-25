// ===============================
// NAVBAR ACTIVE
// ===============================

const navLinks = document.querySelectorAll('.nav-link');

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

// Saat klik/pindah halaman berdasarkan hash
window.addEventListener('hashchange', setActiveNav);
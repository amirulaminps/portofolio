// =========================================================
// NAVBAR
// =========================================================

document.addEventListener("DOMContentLoaded", function () {

    const navLinks =
        document.querySelectorAll(".nav-link");

    const menuToggle =
        document.querySelector(".menu-toggle");

    const navMenu =
        document.querySelector(".nav-menu");


    // =====================================================
    // ACTIVE NAVBAR
    // =====================================================

    function setActiveNav() {

        const currentHash =
            window.location.hash || "#home";

        navLinks.forEach(function (link) {

            link.classList.remove("active");

            if (
                link.getAttribute("href") ===
                currentHash
            ) {
                link.classList.add("active");
            }

        });

    }


    // Jalankan saat halaman pertama dibuka
    setActiveNav();


    // Jalankan saat hash berubah
    window.addEventListener(
        "hashchange",
        setActiveNav
    );


    // =====================================================
    // MOBILE MENU
    // =====================================================

    if (menuToggle && navMenu) {

        // -----------------------------------------------
        // BUKA / TUTUP MENU
        // -----------------------------------------------

        menuToggle.addEventListener(
            "click",
            function (event) {

                event.stopPropagation();

                const isOpen =
                    navMenu.classList.toggle("active");

                menuToggle.classList.toggle(
                    "active",
                    isOpen
                );

                menuToggle.setAttribute(
                    "aria-expanded",
                    isOpen ? "true" : "false"
                );

            }
        );


        // -----------------------------------------------
        // KLIK MENU
        // -----------------------------------------------

        navLinks.forEach(function (link) {

            link.addEventListener(
                "click",
                function () {

                    navMenu.classList.remove(
                        "active"
                    );

                    menuToggle.classList.remove(
                        "active"
                    );

                    menuToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }
            );

        });


        // -----------------------------------------------
        // KLIK DI LUAR MENU
        // -----------------------------------------------

        document.addEventListener(
            "click",
            function (event) {

                if (
                    !navMenu.contains(event.target) &&
                    !menuToggle.contains(event.target)
                ) {

                    navMenu.classList.remove(
                        "active"
                    );

                    menuToggle.classList.remove(
                        "active"
                    );

                    menuToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }

            }
        );


        // -----------------------------------------------
        // KLIK ESC
        // -----------------------------------------------

        document.addEventListener(
            "keydown",
            function (event) {

                if (event.key === "Escape") {

                    navMenu.classList.remove(
                        "active"
                    );

                    menuToggle.classList.remove(
                        "active"
                    );

                    menuToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }

            }
        );

    }


    // =====================================================
    // PDF.JS
    // =====================================================

    if (typeof pdfjsLib !== "undefined") {

        pdfjsLib.GlobalWorkerOptions.workerSrc =
            "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";

    }


    // =====================================================
    // PDF CERTIFICATE PREVIEW
    // =====================================================

    const previews =
        document.querySelectorAll(
            ".certificate-preview"
        );


    previews.forEach(function (canvas) {

        const pdfPath =
            canvas.dataset.pdf;

        if (pdfPath) {

            renderCertificate(
                pdfPath,
                canvas
            );

        }

    });


});


// =========================================================
// RENDER PDF
// =========================================================

async function renderCertificate(
    pdfPath,
    canvas
) {

    try {

        const loadingTask =
            pdfjsLib.getDocument(pdfPath);

        const pdf =
            await loadingTask.promise;

        const page =
            await pdf.getPage(1);


        const scale = 2;

        const viewport =
            page.getViewport({
                scale: scale
            });


        canvas.width =
            viewport.width;

        canvas.height =
            viewport.height;


        const context =
            canvas.getContext("2d");


        await page.render({

            canvasContext:
                context,

            viewport:
                viewport

        }).promise;


    } catch (error) {

        console.error(
            "Gagal menampilkan sertifikat:",
            pdfPath,
            error
        );


        const context =
            canvas.getContext("2d");


        canvas.width = 500;
        canvas.height = 300;


        context.fillStyle =
            "#111827";

        context.fillRect(
            0,
            0,
            canvas.width,
            canvas.height
        );


        context.fillStyle =
            "#9ca9c2";

        context.font =
            "14px Poppins, sans-serif";

        context.textAlign =
            "center";

        context.fillText(
            "Preview sertifikat tidak tersedia",
            canvas.width / 2,
            canvas.height / 2
        );

    }

}

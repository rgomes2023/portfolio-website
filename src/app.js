(function () {
    const controls = document.querySelectorAll(".control");
    const themeBtn = document.querySelector(".theme-btn");
    const body = document.body;

    /* ============================================
       SECTION SWITCHING
    ============================================ */
    controls.forEach(button => {
        button.addEventListener("click", function () {
            const currentActiveBtn = document.querySelector(".active-btn");
            const currentActiveSection = document.querySelector(".active");
            const targetId = this.dataset.id;
            const targetSection = document.getElementById(targetId);

            if (currentActiveBtn) currentActiveBtn.classList.remove("active-btn");
            this.classList.add("active-btn");

            if (currentActiveSection) currentActiveSection.classList.remove("active");
            if (targetSection) targetSection.classList.add("active");
        });
    });

    /* ============================================
       THEME MODE (WORKS WITH ANIMATION)
    ============================================ */
    if (themeBtn) {
        themeBtn.addEventListener("click", () => {
            body.classList.toggle("light-mode");
        });
    }

    /* ============================================
       REVEAL ANIMATION ON SCROLL
    ============================================ */
    const revealElements = document.querySelectorAll(".reveal");

    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("reveal-visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15 }
        );

        revealElements.forEach(el => observer.observe(el));
    } else {
        revealElements.forEach(el => el.classList.add("reveal-visible"));
    }

    /* ============================================
       PORTFOLIO MODAL (FIXED)
       - Clicking the card opens modal
       - Clicking “View Project” DOES NOT open modal
    ============================================ */
    const modal = document.getElementById("portfolio-modal");
    const modalTitle = document.getElementById("modal-title");
    const modalDescription = document.getElementById("modal-description");
    const modalCloseBtn = document.getElementById("portfolio-modal-close");
    const modalOverlay = modal?.querySelector(".portfolio-modal-overlay");
    const portfolioItems = document.querySelectorAll(".portfolio-item");

    function openModal(title, description) {
        if (!modal) return;
        modalTitle.textContent = title;
        modalDescription.textContent = description;
        modal.classList.add("open");
    }

    function closeModal() {
        if (!modal) return;
        modal.classList.remove("open");
    }

    portfolioItems.forEach(item => {
        item.addEventListener("click", (e) => {
            // If user clicks: GitHub icon, YouTube icon, or the “View Project” button → DO NOT open modal
            if (e.target.closest("a")) return;

            const title = item.dataset.modalTitle || item.querySelector("h4").textContent;
            const description =
                item.dataset.modalDescription ||
                item.querySelector(".portfolio-text p")?.textContent ||
                "";

            openModal(title, description);
        });
    });

    if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeModal);
    if (modalOverlay) modalOverlay.addEventListener("click", closeModal);

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeModal();
    });

    /* ============================================
       EMAILJS CONTACT FORM
    ============================================ */
    const contactForm = document.getElementById("contact-form");
    const formStatus = document.getElementById("form-status");

    if (typeof emailjs !== "undefined") {
        emailjs.init("YOUR_PUBLIC_KEY_HERE"); // ← Replace later
    }

    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();

            if (!emailjs) {
                if (formStatus) {
                    formStatus.textContent = "Email service not configured yet.";
                    formStatus.style.color = "orange";
                }
                return;
            }

            if (formStatus) {
                formStatus.textContent = "Sending message...";
                formStatus.style.color = "var(--color-grey-1)";
            }

            emailjs
                .sendForm("YOUR_SERVICE_ID_HERE", "YOUR_TEMPLATE_ID_HERE", "#contact-form")
                .then(
                    () => {
                        contactForm.reset();
                        if (formStatus) {
                            formStatus.textContent = "Message sent successfully! ✅";
                            formStatus.style.color = "lightgreen";
                        }
                    },
                    (error) => {
                        console.error("EmailJS error:", error);
                        if (formStatus) {
                            formStatus.textContent = "Something went wrong. Please try again.";
                            formStatus.style.color = "tomato";
                        }
                    }
                );
        });
    }
})();




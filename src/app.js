/* ===========================================
   SECTION NAVIGATION
=========================================== */

const controls = document.querySelectorAll(".control");
const sections = document.querySelectorAll("[data-section]");

controls.forEach(btn => {
    btn.addEventListener("click", () => {
        
        // Remove active highlight from buttons
        document.querySelector(".active-btn").classList.remove("active-btn");
        btn.classList.add("active-btn");

        const target = btn.getAttribute("data-id");

        // Hide all sections
        sections.forEach(section => {
            section.classList.remove("active-section");
        });

        // Show the selected section
        const activeSection = document.getElementById(target);
        activeSection.classList.add("active-section");

        // Optional smooth scroll to top
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});

/* ===========================================
   THEME TOGGLE
=========================================== */

document.querySelector(".theme-btn").addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
});






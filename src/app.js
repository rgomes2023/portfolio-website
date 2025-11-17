/* ======================================================
   Rodrigo Gomes Portfolio - Navigation Logic (Fixed)
====================================================== */

const sections = document.querySelectorAll("[data-section]");
const controls = document.querySelectorAll(".control");
const body = document.body;

// Set HOME active on first load
document.getElementById("home").classList.add("active-section");

/* ======================================================
   NAVIGATION BUTTONS
====================================================== */
controls.forEach(control => {
    control.addEventListener("click", function () {

        // Active button styling
        document.querySelector(".active-btn").classList.remove("active-btn");
        this.classList.add("active-btn");

        // Hide all sections
        sections.forEach(sec => sec.classList.remove("active-section"));

        // Show selected one
        const target = this.dataset.id;
        document.getElementById(target).classList.add("active-section");

        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});

/* ======================================================
   LIGHT / DARK MODE
====================================================== */
document.querySelector(".theme-btn").addEventListener("click", () => {
    body.classList.toggle("light-mode");
});





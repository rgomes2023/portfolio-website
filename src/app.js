(function () {
    const controls = document.querySelectorAll(".control");
    const sections = document.querySelectorAll("header.container, section.container");
    const themeBtn = document.querySelector(".theme-btn");

    controls.forEach(control => {
        control.addEventListener("click", function () {
            // Update active button
            const currentActiveBtn = document.querySelector(".active-btn");
            if (currentActiveBtn) {
                currentActiveBtn.classList.remove("active-btn");
            }
            this.classList.add("active-btn");

            // Get target section id
            const id = this.dataset.id;
            if (!id) return;

            // Remove 'active' from all sections
            sections.forEach(sec => sec.classList.remove("active"));

            // Add 'active' to the matching section
            const target = document.getElementById(id);
            if (target) {
                target.classList.add("active");
            }
        });
    });

    // Theme toggle
    if (themeBtn) {
        themeBtn.addEventListener("click", () => {
            document.body.classList.toggle("light-mode");
        });
    }
})();


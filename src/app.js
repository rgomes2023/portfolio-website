(function () {
    // PAGE SWITCHING
    const controls = document.querySelectorAll(".control");
    const sections = document.querySelectorAll("section");

    controls.forEach(button => {
        button.addEventListener("click", function() {
            // Remove active style from buttons
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");

            // Switch visible section
            const sectionId = this.dataset.id;
            document.querySelector(".active").classList.remove("active");
            document.getElementById(sectionId).classList.add("active");
        });
    });

    // THEME SWITCH
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");

        // FIX PARTICLE BACKGROUND BUG
        const particles = document.getElementById("particles-js");
        if (particles) particles.style.zIndex = "-1";
    });

    // ENSURE PARTICLES BEHIND CONTENT ALWAYS
    setTimeout(() => {
        const particles = document.getElementById("particles-js");
        if (particles) particles.style.zIndex = "-1";
    }, 500);

})();

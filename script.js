document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll(".content");

    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1);

            sections.forEach(section => {
                section.classList.remove("active");
            });

            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add("active");

                // GSAP animation
                if (typeof gsap !== "undefined") {
                    gsap.fromTo(targetSection,
                        { opacity: 0, y: 20 },
                        { opacity: 1, y: 0, duration: 0.5 }
                    );
                } else {
                    console.error("GSAP is not loaded!");
                }
            } else {
                console.error(`Section with ID '${targetId}' not found.`);
            }
        });
    });
});

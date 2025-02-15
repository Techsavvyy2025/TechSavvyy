document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll(".content");

    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            sections.forEach(section => section.classList.remove("active"));
            targetSection.classList.add("active");

            // GSAP animation
            gsap.fromTo(targetSection,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.5 }
            );
        });
    });
});

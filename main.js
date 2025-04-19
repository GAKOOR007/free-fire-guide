
document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".sidebar a");
    const sections = document.querySelectorAll(".main-content section");

    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute("href"));
            if (target) {
                sections.forEach(sec => sec.style.display = "none");
                target.style.display = "block";
            }
        });
    });

    sections.forEach((sec, index) => {
        if (index !== 0) sec.style.display = "none";
    });
});

// Zvýraznění aktivní stránky
const links = document.querySelectorAll("nav a");
const currentPage = location.pathname.split("/").pop();

links.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
    }
});

// Hamburger toggle
const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("main-nav");

// Kliknutí otevře / zavře menu
hamburger.addEventListener("click", () => {
    nav.classList.toggle("show");
});

// Desktop hover (volitelné, aby se rozbalilo i bez kliknutí)
if (window.innerWidth > 800) {
    hamburger.addEventListener("mouseenter", () => {
        nav.classList.add("show");
    });
    hamburger.addEventListener("mouseleave", () => {
        nav.classList.remove("show");
    });
}
const bookNowButton = document.querySelector("[data-menu-button]");
const mobileMenu = document.querySelector("[data-mobile-menu]");

const closemobileMenu = () => {
    if (!bookNowButton || !mobileMenu) return;
    bookNowButton.setAttribute("aria-expanded", "false");
    mobileMenu.classList.remove("open");
};

bookNowButton?.addEventListener("click", () => {
    if (!bookNowButton || !mobileMenu) return;
    const isOpen = bookNowButton.getAttribute("aria-expanded") === "true";
    bookNowButton.setAttribute("aria-expanded", String(!isOpen));
    mobileMenu.classList.toggle("open");
});

const mq = window.matchMedia("(min-width: 901px)");
    mq.addEventListener("change", (e) => {
    if (e.matches) closemobileMenu();
});
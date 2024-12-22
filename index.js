document.addEventListener("DOMContentLoaded", function () {
    const yearElement = document.querySelector(".year");
    const secondCta = document.querySelector(".btn-second-cta");
    const hamburger = document.querySelector(".hamburger");
    const mobileMenu = document.querySelector(".mobile-menu");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    secondCta.addEventListener('mouseenter', () => {
        secondCta.querySelector("img").src = "assets/images/chat-white.png";
    });
    
    secondCta.addEventListener('mouseleave', () => {
        secondCta.querySelector("img").src = "assets/images/chat.png"
    });

    hamburger.addEventListener("click", e => {
        hamburger.classList.toggle("opened");
        hamburger.setAttribute('aria-expanded', hamburger.classList.contains('opened'))

        if (hamburger.classList.contains("opened")) {
            mobileMenu.style.display = "flex";
        } else {
            mobileMenu.style.display = "none"
        }
    });

});
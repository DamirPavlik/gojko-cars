jQuery(document).ready(function($) {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        merge: true,
        nav: true, // Enable navigation arrows
        navText: ["<div class='owl-prev'>&lt;</div>", "<div class='owl-next'>&gt;</div>"], // Customize arrows
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const yearElement = document.querySelector(".year");
    const secondCta = document.querySelector(".btn-second-cta");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    secondCta.addEventListener('mouseenter', () => {
        secondCta.querySelector("img").src = "assets/images/chat-white.png";
    });
    
    secondCta.addEventListener('mouseleave', () => {
        secondCta.querySelector("img").src = "assets/images/chat.png"
    });
    
});
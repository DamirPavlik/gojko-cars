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
    // Check if the browser supports geolocation
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            // URL-encode the message
            const message = encodeURIComponent(`Zdravo, nalazim se na lokaciji: https://maps.google.com/?q=${latitude},${longitude}`);

            // Update the link with the location
            const link = document.getElementById('location-link');
            link.href = `sms:+38162735090?body=${message}`;
        }, function (error) {
            console.error("Geolocation error:", error.message);
        });
    } else {
        console.error("Geolocation is not supported by this browser.");
    }
});
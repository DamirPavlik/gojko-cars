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

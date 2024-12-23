function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
}

function lazyLoadImages() {
    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => {
        if (isInViewport(img)) {
            img.src = img.getAttribute('data-src');
            img.removeAttribute('data-src');
        }
    });
}

window.addEventListener('load', lazyLoadImages);
window.addEventListener('scroll', lazyLoadImages);
window.addEventListener('resize', lazyLoadImages);
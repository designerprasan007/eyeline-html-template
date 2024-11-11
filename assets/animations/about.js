document.addEventListener('DOMContentLoaded', function () {
    const heroSplide = new Splide( '#hero_backgroung', {
        type   : 'loop',
        drag   : 'free',
        // focus  : '',
        arrows : false,
        pagination: false,
        autoScroll: {
        speed: 1,
        pauseOnHover: false,
        pauseOnFocus: false,
        },
    });
    heroSplide.mount(window.splide.Extensions );
    })
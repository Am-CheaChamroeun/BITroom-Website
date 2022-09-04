
(function () {
"use strict";

/**
 * Easy selector helper function
 */
const select = (el, all = false) => {
    el = el.trim();
    if (all) {
    return [...document.querySelectorAll(el)];
    } else {
    return document.querySelector(el);
    }
};

/**
 * Easy event listener function
 */
const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all);
    if (selectEl) {
    if (all) {
        selectEl.forEach((e) => e.addEventListener(type, listener));
    } else {
        selectEl.addEventListener(type, listener);
    }
    }
};

/**
 * Easy on scroll event listener
 */
const onscroll = (el, listener) => {
    el.addEventListener("scroll", listener);
};

/*--------------------------------------------------------------
# Projects ################################################
--------------------------------------------------------------*/
/**
 * Clients Slider
 */
new Swiper(".clients-slider", {
    speed: 400,
    loop: true,
    autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    },
    breakpoints: {
    767: {
        slidesPerView: 1,
        spaceBetween: 30,
        centeredSlides: true,
    },

    768: {
        slidesPerView: 2,
        spaceBetween: 70,
        centeredSlides: false,
        centeredSlidesBounds: false,
    },
    1199: {
        slidesPerView: 2,
        spaceBetween: 10,
        centeredSlides: false,
        centeredSlidesBounds: false,
    },
    1200: {
        slidesPerView: 3,
        spaceBetween: 50,
        centeredSlides: false,
        centeredSlidesBounds: false,
    },
    },
});
})();

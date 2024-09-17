const navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById("nav-toggle"),
    navClose = document.getElementById("nav-close");

/* Mostra menu no celular */
function menuShow() {
    if (navMenu.classList.contains("show-menu")) {
        navMenu.classList.remove("show-menu");
    } else {
        navMenu.classList.add('show-menu');
    };
};

navToggle.onclick = () => menuShow();
navClose.onclick = () => menuShow();

/* Ocultar menu quando clicar em um item da lista */
const navLink = document.querySelectorAll(".nav__link");
const linkAction = () => {
    navMenu.classList.remove("show-menu");
};

navLink.forEach(n => n.addEventListener('click', linkAction));

/* Swiper Roupas */
const swiperHome = new Swiper('.home__swiper', {
    loop: true,
    grabCursor: true,
    slidesPerView: 'auto',
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        768: {
            slidesPerView: 3,
            centeredSlides: 'auto'
        },
        1150: {
            centeredSlides: 'auto',
            spaceBetween: -64,
        }
    },

});

/* Ativação do background do header */
const bgHeader = () => {
    const header = document.getElementById("header");
    this.scrollY >= 50 ? header.classList.add("bg-header") : header.classList.remove("bg-header");
};

window.addEventListener('scroll', bgHeader);

/* Animação Scroll reveal */

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    reset:true,
});

sr.reveal(`.home__swiper, .home__footer`);
sr.reveal(`.home__circle`, { scale: 1.5, delay: 300 });
sr.reveal(`.home__subcircle`, { scale: 1.5, delay: 500 });
// bulma.io - burger menu
document.addEventListener('DOMContentLoaded', app.view.addBurgerToggle);

//hiding navbar menu on click in mobile view and scrolling to a.rel
const aNavbarLinks = document.querySelectorAll('#navbarLinks a')
for (let aNavbarLink of aNavbarLinks) {
    if (aNavbarLink.rel) aNavbarLink.addEventListener('click', app.view.scrollToRel);
}

const aScrollLinks = document.querySelectorAll('a.scroll')
for (let aScrollLink of aScrollLinks) {
    aScrollLink.addEventListener('click', () => {
        document.querySelector(aScrollLink.rel).scrollIntoView({ behavior: "smooth", block: "start" });
    });
}

// initiate slider
new Splide('.splide', {
    type: 'loop',
    autoplay: true,
    interval: 4000,
    arrows: false,
}).mount();
// bulma.io - burger menu
document.addEventListener('DOMContentLoaded', app.view.addBurgerToggle);

// hiding navbar menu on click in mobile view and scrolling to a.rel
const aNavbarLinks = document.querySelectorAll('#navbarLinks a');
for (let aNavbarLink of aNavbarLinks) {
    if (aNavbarLink.rel) aNavbarLink.addEventListener('click', app.view.scrollToRel);
}

const aScrollLinks = document.querySelectorAll('a.scroll');
for (let aScrollLink of aScrollLinks) {
    aScrollLink.addEventListener('click', () => {
        document.querySelector(aScrollLink.rel).scrollIntoView({ behavior: "smooth", block: "start" });
    });
}

// 
const modalImages = document.querySelectorAll('.zoom .card-image');
for (let modalImage of modalImages) {
    modalImage.addEventListener('click', () => { app.view.toggleModalVisibility(modalImage.parentNode.querySelector('.modal')); });
}

let closeModals = document.querySelectorAll('.modal-background');
for (let closeModal of closeModals) {
    closeModal.addEventListener('click', () => { app.view.toggleModalVisibility(closeModal.parentNode); });
}
closeModals = document.querySelectorAll('.modal-close');
for (let closeModal of closeModals) {
    closeModal.addEventListener('click', () => { app.view.toggleModalVisibility(closeModal.parentNode); });
}

// initiate slider
new Splide('.splide', {
    type: 'loop',
    autoplay: true,
    interval: 4000,
    arrows: false,
}).mount();
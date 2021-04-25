// bulma.io - burger menu
document.addEventListener('DOMContentLoaded', app.view.addBurgerToggle);

//hiding navbar menu on click in mobile view
const aNavbarLinks = document.querySelectorAll('#navbarLinks a')
for (let aNavbarLink of aNavbarLinks) {
    aNavbarLink.addEventListener('click', app.view.hideBurgerOnClick);
}

const aGoHomeLinks = document.querySelectorAll('.goHome')
for (let aGoHomeLink of aGoHomeLinks) {
    aGoHomeLink.addEventListener('click', () => {
        document.querySelector(aGoHomeLink.rel).scrollIntoView({ behavior: "smooth", block: "start" });
    });
}
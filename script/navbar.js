const navbar = document.getElementById('navbar');
let ticking = false;

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            const isScrolled = window.scrollY > 0;

            navbar.classList.toggle('nav-scrolled', isScrolled);
            navbar.classList.toggle('nav-default', !isScrolled);

            ticking = false;
        });
        ticking = true;
    }
});

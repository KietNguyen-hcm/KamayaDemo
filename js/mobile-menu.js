document.addEventListener('DOMContentLoaded', () => {
    const navbars = document.querySelectorAll('.navbar');

    navbars.forEach((navbar) => {
        const toggle = navbar.querySelector('.nav-toggle');
        const menu = navbar.querySelector('.nav-menu');

        if (!toggle || !menu) return;

        const closeMenu = () => {
            navbar.classList.remove('nav-open');
            toggle.setAttribute('aria-expanded', 'false');
        };

        toggle.addEventListener('click', () => {
            const isOpen = navbar.classList.toggle('nav-open');
            toggle.setAttribute('aria-expanded', String(isOpen));
        });

        menu.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', closeMenu);
        });
    });
});

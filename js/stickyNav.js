document.addEventListener('DOMContentLoaded', (event) => {
    const navbar = document.getElementById('fixed-menu-logo');
    const navbarActions = document.getElementById('navbar-actions');
    // OnScroll event handler
    const onScroll = () => {
        // Get scroll value
        const scroll = document.documentElement.scrollTop;
        if (scroll > 150) {
            navbar.classList.remove('logo--hidden');
            navbarActions.classList.add('hidden--mobile');
        } else {
            navbarActions.classList.remove('hidden--mobile');
            navbar.classList.add('logo--hidden');
        }
    };
    window.addEventListener('scroll', onScroll);
})
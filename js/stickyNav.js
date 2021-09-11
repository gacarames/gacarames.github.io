document.addEventListener('DOMContentLoaded', (event) => {
    const navbar = document.getElementById('fixed-menu-logo');
    const navbarActions = document.getElementById('navbar-actions');

    const stickyButton = document.getElementById('sticky-button');
    // OnScroll event handler
    const onScroll = () => {
        // Get scroll value
        const scroll = document.documentElement.scrollTop;
        if (scroll > 150) {
            navbar.classList.remove('logo--hidden');
            navbarActions.classList.add('hidden--mobile');
            stickyButton.classList.remove('hidden--desktop');
        } else {
            navbarActions.classList.remove('hidden--mobile');
            navbar.classList.add('logo--hidden');
            stickyButton.classList.add('hidden--desktop');
        }
    };
    window.addEventListener('scroll', onScroll);
})
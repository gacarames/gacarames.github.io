(function () {
    const openMenu = document.getElementById('open-menu');
    const closeMenu = document.getElementById('close-menu');
    const lateralMenu = document.getElementById('header-menu');

    openMenu.addEventListener('click', () => {
        lateralMenu.classList.add('header__menu--open')
    })

    closeMenu.addEventListener('click', () => {
        lateralMenu.classList.remove('header__menu--open')
    })

})();
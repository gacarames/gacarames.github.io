document.addEventListener('DOMContentLoaded', (event) => {
    const openMenu = document.getElementById('open-menu');
    const closeMenu = document.getElementById('close-menu');
    const lateralMenu = document.getElementById('menu');

    const courseItem = document.getElementById('cursos-id');
    const courseMenu = document.getElementById('cursos-list');

    openMenu.addEventListener('click', () => {
        console.log('header__menu--open')
        lateralMenu.classList.add('menu--open')
    })

    closeMenu.addEventListener('click', () => {
        lateralMenu.classList.remove('menu--open')
    })

    courseItem.addEventListener('click', () => {
        if (courseMenu.classList.contains('menu__list--sub-collapse')) {
            courseMenu.classList.remove('menu__list--sub-collapse')
        } else {
            courseMenu.classList.add('menu__list--sub-collapse')
        }
    })
})

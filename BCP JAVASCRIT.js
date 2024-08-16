// Script para submenús
const navItems = document.querySelectorAll('.nav-item');
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

navItems.forEach(item => {
    item.addEventListener('click', () => {
        const submenu = item.querySelector('.submenu');
        submenu.classList.toggle('active');
        item.classList.toggle('active');
    });
});

// Script para menú hamburguesa
menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});


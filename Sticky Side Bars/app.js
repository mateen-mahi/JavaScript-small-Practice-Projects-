const hamBurger = document.querySelector('.hamburger');
const toggleNav = document.querySelector('.hide-nav');

hamBurger.addEventListener('click', () => {
    hamBurger.classList.toggle('cross');
    toggleNav.classList.toggle('show-nav');
});



//Реализация класса ibg
function ibg() {
    const ibg = document.querySelectorAll('.ibg');
    ibg.forEach(item => {
        const img = item.querySelector('img');
        if (img) {
            item.style.backgroundImage = `url("${img.getAttribute('src')}")`
        }
    })
}
ibg();

//Реализация бургер-меню
const burgerMenu = document.querySelector('.burger-menu');
const menuBody = document.querySelector('.menu__body');

burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');
    menuBody.classList.toggle('active');
    document.body.classList.toggle('lock');
})
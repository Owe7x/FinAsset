console.log('file 1');
const modalOppen = document.querySelector('.header__top-burger')
const modalClose = document.querySelector('.modal-burger')
const modal = document.querySelector('.modal-header')

modalOppen.addEventListener('click', () => {
    modal.style.display = "block"
})
modalClose.addEventListener('click', () => {
    modal.style.display = "none"
})
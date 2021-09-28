//select item
let navbar = document.querySelector('.navbar');
let cartItem = document.querySelector('.cart__items__container');
let searchForm = document.querySelector('.search__form')

document.querySelector('#menu__btn').onclick = () => {
    navbar.classList.toggle('active')
    cartItem.classList.remove('active');
    searchForm.classList.remove('active');
}

document.querySelector('#cart__btn').onclick = () => {
    cartItem.classList.toggle('active')
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

document.querySelector('#search__btn').onclick = () => {
    searchForm.classList.toggle('active')
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
    searchForm.classList.remove('active');
}
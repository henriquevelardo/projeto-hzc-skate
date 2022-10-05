const botaoMenu = document.querySelector('.cabecalho__menu')
const menu = document.querySelector('.menu-lateral')

const botaoLateral = document.querySelector('.menu-lateral__link--inicio')
const menuLateralAtivo = document.querySelector('.menu-lateral__link--inativo')


botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('menu-lateral--ativo')
})




    


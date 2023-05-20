const navPul = document.querySelector('#aside')
const head = document.querySelector('#header')
const main = document.querySelector('#main')

function enter() {
    navPul.style.left = '0'
}

function sair() {
    navPul.style.left = '-25vw'
}

navPul.addEventListener('mouseenter', enter)

















// AQUI COMEÇA A FUNÇÃO DE CLICK MENU 

const btnKokushibo = document.querySelector('#aKokushibo')
const btnDoma = document.querySelector('#aDoma')
const btnAkaza = document.querySelector('#aAkaza')
const btnHantengu = document.querySelector('#aHantengu')
const btnGyokko = document.querySelector('#aGyokko')
const btnGyutaro = document.querySelector('#aGyutaro')

const seckokushibo = document.querySelector('#secKokushibo')
const secDoma = document.querySelector('#secDoma')
const secAkaza = document.querySelector('#secAkaza')
const secHantengu = document.querySelector('#secHantengu')
const secGyokko = document.querySelector('#secGyokko')
const secGyutaro = document.querySelector('#secGyutaro')

let showABA = false;


btnKokushibo.addEventListener('click', transatation)
btnDoma.addEventListener('click', transatation)
btnAkaza.addEventListener('click', transatation)
btnHantengu.addEventListener('click', transatation)
btnGyokko.addEventListener('click', transatation)
btnGyutaro.addEventListener('click', transatation)
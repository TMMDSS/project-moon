const navPul = document.querySelector('#aside')
const head = document.querySelector('#header')
const main = document.querySelector('#main')

function enter() {
    navPul.style.left = '0'
}

function sair() {
    navPul.style.left = '-25vw'
}

// AQUI COMEÇA A FUNÇÃO DE CLICK MENU 

let btnKokushibo = document.querySelector('#aKokushibo')
let btnDoma = document.querySelector('#aDoma')
let btnAkaza = document.querySelector('#aAkaza')
let btnHantengu = document.querySelector('#aHantengu')
let btnGyokko = document.querySelector('#aGyokko')
let btnGyutaro = document.querySelector('#aGyutaro')

function ação() {

    let showABA = !showABA

    if (showABA) {
        
    } else {
        
    }




}
btnKokushibo.addEventListener('click', ação)
btnDoma.addEventListener('click', ação)
btnAkaza.addEventListener('click', ação)
btnHantengu.addEventListener('click', ação)
btnGyokko.addEventListener('click', ação)
btnGyutaro.addEventListener('click', ação)
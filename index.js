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

let seckokushibo = document.querySelector('#secKokushibo')
let secDoma = document.querySelector('#secDoma')
let secAkaza = document.querySelector('#secAkaza')
let secHantengu = document.querySelector('#secHantengu')
let secGyokko = document.querySelector('#secGyokko')
let secGyutaro = document.querySelector('#secGyutaro')

let showABA = false;


function ação() {
    showABA = !showABA

    if (showABA) {
        seckokushibo.style.display = 'none'
        secDoma.style.display = 'none'
        secAkaza.style.display = 'none'
        secHantengu.style.display = 'none'
        secGyokko.style.display = 'none'
        secGyutaro.style.display = 'none'
        //seckokushibo.classList.add('noneVISE')
    } else {
        seckokushibo.style.display = 'flex'
        secDoma.style.display = 'flex'
        secAkaza.style.display = 'flex'
        secHantengu.style.display = 'flex'
        secGyokko.style.display = 'flex'
        secGyutaro.style.display = 'flex'
        //seckokushibo.classList.remove('noneVISE')
    }

}
btnKokushibo.addEventListener('click', ação)
btnDoma.addEventListener('click', ação)
btnAkaza.addEventListener('click', ação)
btnHantengu.addEventListener('click', ação)
btnGyokko.addEventListener('click', ação)
btnGyutaro.addEventListener('click', ação)
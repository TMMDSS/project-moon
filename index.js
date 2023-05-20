///////////////////////////////////////JS DO MENU LATERAL
const navPul = document.querySelector('#aside')
const head = document.querySelector('#header')
const main = document.querySelector('#main')
const p = document.getElementsByTagName('p')[0]

function enter() {
    navPul.style.left = '0'
}

function sair() {
    navPul.style.left = '-25vw'
}

navPul.addEventListener('mouseenter', enter)
main.addEventListener('mouseenter', sair)

///////////////////////////////////////JS DA BARRA FIXA

window.onscroll = function() {scrollTop()};

var sticky = header.offsetTop;

function scrollTop() {

  if (window.pageYOffset > sticky) {
    head.classList.add("fIXA");
    head.style.height = '75px'
    main.style.marginTop = '75px'
    head.removeChild(p);
    head.style.transition = ".2s ease-in-out"

  } else {
    head.classList.remove("fIXA");
    head.style.height = ''
    main.style.marginTop = ''
    head.appendChild(p);
    head.style.transition = ".2s ease-in-out"
  }

}















///////////////////////////////////////AQUI COMEÇA A FUNÇÃO DE SLIDE

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
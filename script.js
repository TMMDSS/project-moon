const content = document.querySelector("#searchContent");
const inputSearch = document.querySelector("input[type='search']");

let guiasOni = [
  { file: "cardKokushibo.html", name: "Kokushibo" },
  { file: "cardDoma.html", name: "Doma" },
  { file: "cardAkaza.html", name: "Akaza" },
  { file: "cardHantengu.html", name: "Hantengu" },
  { file: "cardGyokko.html", name: "Gyokko" },
  { file: "cardGyutaro.html", name: "Gyutaro" },
  { file: "cardDaki.html", name: "Daki" },
  { file: "cardKaigaku.html", name: "Kaigaku" },
  { file: "cardGyomei.html", name: "Gyomei"},
  { file: "cardInosuke.html", name: "Inosuke"},
  { file: "cardMitsuri.html", name: "Mitsuri"},
  { file: "cardObanai.html", name: "Obanai"},
  { file: "cardRengoku.html", name: "Rengoku"},
  { file: "cardSanemi.html", name: "Sanemi"},
  { file: "cardShinobu.html", name: "Shinobu"},
  { file: "cardTanjiro.html", name: "Tanjiro"},
  { file: "cardTengen.html", name: "Tengen"},
  { file: "cardTokito.html", name: "Tokito"},
  { file: "cardTomioka.html", name: "Tomioka"},
  { file: "cardYoriishi.html", name: "Yoriishi"},
  { file: "cardZenitsu.html", name: "Zenitsu"}
];

let items = guiasOni;

inputSearch.oninput = () => {
    content.innerHTML = ""
    
    items.filter((item) => 
        item.name.toLowerCase().includes(inputSearch.value.toLowerCase())
    )
    .forEach((item) => addHTML(item))
}


function addHTML(item) {
    const a = document.createElement(("a"));
    a.className = 'OptionSelection';
    a.target = '_black'
    a.href = `${item.file}`;
    a.textContent  = `${item.name}`;
    content.append(a);
    
    if (inputSearch.value == "") {
        content.innerHTML = ""
    }
}

// ESPAÇO
const label = document.querySelector(".fa-magnifying-glass")
const searchInput = document.querySelector("#iSearch")
let show = true

label.addEventListener("click", btnPesquisaMq = () => {

    const pedro = () => {
        show = !show
   
        if (show) {
            searchInput.style.marginLeft = "-200vw"
            label.style.color = ""

        } else {
            searchInput.style.marginLeft = "0"
            label.style.color = "red"
        }
    }
    pedro()
    
})


// ESPAÇO

const gridDemon = document.querySelector("#moonGridDemon")
const gridSlayer = document.querySelector("#moonGridSlayer")
const changeRaceButton = document.querySelector("#changeRace")      
let show2 = true


changeRaceButton.addEventListener("click", raquel = () => {
    show2 = !show2

    if(show2) {

        gridSlayer.style.display = "grid"
        gridDemon.style.display = "none"

        changeRaceButton.src = "imagens/NEW/selectionKagaya.png"
    } else {

        gridSlayer.style.display = "none"
        gridDemon.style.display = "grid"
        
        changeRaceButton.src = "imagens/NEW/selectionMuzan.jpg"
    }
})

raquel()
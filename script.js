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

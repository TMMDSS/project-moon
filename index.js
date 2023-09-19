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
    
    items
    .filter((item) => 
        item.name.toLowerCase().includes(inputSearch.value.toLowerCase())
    )
    .forEach((item) => addHTML(item))
}

function addHTML(item) {
    const div = document.createElement(("div"));
    div.className = "divOptionSelection";
    div.innerHTML = `<a href="${item.file}" target="_blank">${item.name}</a>`;
    content.append(div);
}
let divMain = document.querySelector(".lista-produto")
let divMain2 = document.querySelector(".lista-produto2")

function criarDIv(index) {
    let div = document.createElement("div")
    div.classList.add(index)


    return div
}

function image(index, index2){
    let img = document.createElement("img")
    img.classList.add(index)
    img.src= index2

    return img
}

let i = 0

let vetor =[]
let vImage=[]
let vetordiv =[]


function see(texto, img, texto2){ 
    var caixa = criarDIv("caixa")
for( i= 0; i < 1; i++) {

caixa.appendChild(criarDIv("texto1")).innerHTML= texto
caixa.appendChild(criarDIv("dentro")).appendChild(image("image",img))
caixa.appendChild(criarDIv("texto2")).innerText = texto2;

a = document.createElement("a")
a.href= "encomendar/encomenda.html"

let button = document.createElement("button")
button.classList.add("btn")
button.innerHTML="encomendar";
a.appendChild(button)
caixa.appendChild(a)
}
divMain.appendChild(caixa)
}


console.log(divMain);

let vet = ["PiZZA CSL Parque da Independência",
"PiZZA CSL Gamek","PiZZA CSL Camama","PiZZA CSL Cassenda","PiZZA CSL Golf2"]
let ve =["av hochi Mir largo 1 de maio",
"Entrada do catinto, recauchotagem",
"Escola de Condução BechaL"
," Rua 6 por detras da Creche Maria Flora",

"Golf2 entrada do Banco BIC "]
let des = document.querySelector(".adress") 







console.log(des);
function edition(index2 , index3) {
  let ul = document.createElement("ul")
  ul.classList.add("result")
    for ( i = 0; i < 1; i++) {
         
    let title = criarDIv("title")
    let desc = criarDIv("descri")
    let sala = criarDIv("sala")
    let  by = document.createElement("button")
    by.classList.add("bbu")
    by.innerText = "Selecionar"

    sala.appendChild(by)
    
    let li = document.createElement("li")
    li.classList.add("ala")

   let  details = criarDIv("details")
   let linha = criarDIv("linha")

    title.innerText = index2
    desc.innerText = index3
    details.appendChild(linha)
    details.appendChild(title)
    details.appendChild(desc)
   
     
  li.appendChild(details)
  li.appendChild(sala)
  ul.appendChild(li)


}
 des.appendChild(ul)
}

for (let i = 0; i < 5; i++) {
 
  edition(vet[i], ve[i])

}



document.querySelector('.btn2').addEventListener("click", ()=>{
   let cc = document.querySelector('.interface')
   cc.classList.remove("interface")
  cc.classList.add("angola")
   console.log(cc);
  })
 

console.log(des);   


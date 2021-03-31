import { pizzas } from "./pizzas.js";
import {addCarrinho, realizarPedido} from "./pedido.js"

let modalPedido = document.getElementById('fazerPedido')
let addCarrinhoBtn = document.getElementById("addCarrinhoBtn")

//antes do modal de pedido ser visivel
modalPedido.addEventListener('shown.bs.modal', (e) => {
    const selectSabor = document.getElementById("saboresPizza")
    const selectTamanho = document.getElementById("tamanhoPizza")
    const selectBorda = document.getElementById("bordaPizza")
    if(selectSabor.options.length == 0 & selectTamanho.options.length == 0 & selectBorda.options.length == 0) {
        popularSelects(selectSabor,selectTamanho,selectBorda);
    }
})

//adivionar evento ao botao de addCarinho
addCarrinhoBtn.addEventListener("click", (e) => {
    addCarrinho();
})

function popularSelects(selectSabor,selectTamanho,selectBorda) { 
    const {sabores,tamanho,borda} = pizzas; 
    for(let index in sabores) {  
        let option = document.createElement("option")
        option.setAttribute("value",index)  
        let textoOption = document.createTextNode(sabores[index].nome) 

        option.appendChild(textoOption)
        selectSabor.appendChild(option)
    }
    for(let index in borda) {
        let option = document.createElement("option")
        option.setAttribute("value",index)  
        let textoOption = document.createTextNode(borda[index].nome) 

        option.appendChild(textoOption)
        selectBorda.appendChild(option)
    }
    for(let index in tamanho) {
        let option = document.createElement("option")
        option.setAttribute("value",index)
        let textoOption = document.createTextNode(tamanho[index])

        option.appendChild(textoOption)
        selectTamanho.appendChild(option)
    }
    selectTamanho.selectedIndex = "1"
}




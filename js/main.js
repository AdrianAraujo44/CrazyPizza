import { pizzas } from "./pizzas.js";
import { addCarrinho, realizarPedido, pizzaEscolhida} from "./pedido.js"
import { validarDados } from "./validacao.js"
import { scrollToIdClick } from "./scroll.js"
import { fecharMenu } from "./scroll.js"

let modalPedido = document.getElementById('fazerPedido')
let addCarrinhoBtn = document.getElementById("addCarrinhoBtn")
let realizarPedidoBTN = document.getElementById("realizarPedido")
let pizzaCardapio = document.getElementById("cardapio").getElementsByTagName("img")
let pedidoNavItem = document.getElementById("pedidoNavItem")

const selectSabor = document.getElementById("saboresPizza")
const selectTamanho = document.getElementById("tamanhoPizza")
const selectBorda = document.getElementById("bordaPizza")

const menuItens = document.querySelectorAll('.navbar a[href^="#"]')
menuItens.forEach(item => {
    item.addEventListener('click',scrollToIdClick);
})

popularSelects();

for(let index = 0; index < pizzaCardapio.length ; index++) {
    pizzaCardapio[index].addEventListener("click",(e) => {
        pizzaEscolhida(index,modalPedido)
    })
}

//adivionar evento ao botao de addCarinho
addCarrinhoBtn.addEventListener("click", (e) => {
    addCarrinho();
})

//adicionar evento ao botao de realizarPedido
realizarPedidoBTN.addEventListener("click", (e) => {
    if(validarDados()) {
        realizarPedido()
    }
})

//adicionar evento ao item do modal de pedido
pedidoNavItem.addEventListener("click",(e) => {
    fecharMenu()
})

function popularSelects() {
    const { sabores, tamanho, borda } = pizzas;
    for (let index in sabores) {
        let option = document.createElement("option")
        option.setAttribute("value", index)
        let textoOption = document.createTextNode(sabores[index].nome)

        option.appendChild(textoOption)
        selectSabor.appendChild(option)
    }
    for (let index in borda) {
        let option = document.createElement("option")
        option.setAttribute("value", index)
        let textoOption = document.createTextNode(borda[index].nome)

        option.appendChild(textoOption)
        selectBorda.appendChild(option)
    }
    for (let index in tamanho) {
        let option = document.createElement("option")
        option.setAttribute("value", index)
        let textoOption = document.createTextNode(tamanho[index])

        option.appendChild(textoOption)
        selectTamanho.appendChild(option)
    }
}


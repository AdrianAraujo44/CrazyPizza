import {carrinho} from "./pedido.js"

let alerta = document.getElementById("mensagemValidacao")
let pizzasCampos = document.getElementById("pizzaCampos")
let clienteCampos = document.getElementById("clienteCampos")
let modalBodyPedido = document.getElementById("modalBodyPedido")

function exibirMensagem(mensagem = 1) {
    alerta.innerText = ''
    let textoMensagem
    if (mensagem == 1) {
        textoMensagem = document.createTextNode("Os campos não podem estar vazio")
    } else {
        textoMensagem = document.createTextNode(mensagem)
    }
    alerta.appendChild(textoMensagem)
    alerta.style.display = "block"
}

function esconderMensagem() {
    alerta.style.display = "none"
}

function inputErro(elemento) {
    elemento.addEventListener("change", (e) => {
        elemento.style.borderColor = "#ced4da"
    })
}

export function validarDados() {
    let validacaoCliente = true
    let campos = clienteCampos.getElementsByTagName("input")

    for (let item = 0; item < campos.length; item++) {
        if (campos[item].value.trim().length == 0) {
            campos[item].style.borderColor = "red"
            exibirMensagem()
            inputErro(campos[item])
            validacaoCliente = false
        }
    }

    if (validacaoCliente == true & carrinho.length >= 1) {
        esconderMensagem()
        return true
    } else {
        if(carrinho.length ==0){
            verificarPizza()
        }
        exibirMensagem()
        modalBodyPedido.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
        return false
    }
}

export function verificarPizza() {
    let select = pizzasCampos.getElementsByTagName("select")
    let quantidade = document.getElementById("quantidadePizza")
    let validacaoSelect = true
    let validacaoQuant = true
    if (quantidade.value <= 0) {
        exibirMensagem("A quantidade de pizzas não pode ser zero ou nulo")
        quantidade.style.borderColor = "red"
        inputErro(quantidade)
        validacaoQuant = false
    }

    validacaoSelect = validarSelects(select)
    if (validacaoQuant == true & validacaoSelect == true) {
        esconderMensagem()
        return true
    }else {
        modalBodyPedido.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
        return false
    }

}

function validarSelects(selects) {
    let validacaoSelect = true
    for (let item = 0; item < selects.length; item++) {
        if (selects[item].value == "") {
            selects[item].style.borderColor = "red"
            exibirMensagem("Escolha a pizza desejada")
            inputErro(selects[item])
            validacaoSelect = false
        }
    }
    return validacaoSelect
}
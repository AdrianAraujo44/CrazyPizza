let alerta = document.getElementById("mensagemValidacao")

function exibirMensagem(mensagem = 1) {
    alerta.innerText = ''
    let textoMensagem
    if(mensagem == 1) {
        textoMensagem = document.createTextNode("Os campos não podem estar vazio")
    }else {
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

export function validarDados (carrinho,form) {
    let validacaoCliente = true
    let validacaoPizza = true
    let campos = form.getElementsByTagName("input")   
    for(let item =0; item < campos.length ; item ++) {
        if(campos[item].value.trim().length == 0) {
            campos[item].style.borderColor = "red"
            exibirMensagem()
            inputErro(campos[item])
            validacaoCliente = false
        }
    }
    if(carrinho.length == 0) {
        exibirMensagem("Escolha o sabor de pizza desejado")
        validacaoPizza = false
    }
    if(validacaoCliente == true & validacaoPizza == true) {
        esconderMensagem()
        return true
    }else {
        return false
    }
}

export function verificarQuantidade() {
    let quantidade = document.getElementById("quantidadePizza")
    if(quantidade.value <= 0) {
        exibirMensagem("A quantidade de pizzas não pode ser zero ou nulo")
        quantidade.style.borderColor = "red"
        inputErro(quantidade)
        return false
    }else {
        esconderMensagem()
    } 
    return true
}
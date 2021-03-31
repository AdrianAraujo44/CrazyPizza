import {pizzas} from "./pizzas.js"
let carrinho = new Array;

export function addCarrinho() {
    const selectSabor = document.getElementById("saboresPizza")
    const selectTamanho = document.getElementById("tamanhoPizza")
    const selectBorda = document.getElementById("bordaPizza")
    let quantidade = document.getElementById("quantidadePizza").value

    const pizza = {
        sabor: selectSabor.options[selectSabor.selectedIndex].value,
        tamanho: selectTamanho.options[selectTamanho.selectedIndex].value,
        borda: selectBorda.options[selectBorda.selectedIndex].value,
        quantidade: quantidade
    }
    carrinho.push(pizza)
    console.log(carrinho)
    criarTabela();
}

function criarTabela() {
    let body = document.getElementById("bodytabelaPedidos")
    let tabela = document.getElementById("tabela-de-pedidos")
    body.innerHTML = ''
    let numprecoU,numprecoT,numQuantidade
    tabela.style.display = "block";
    for (let indexCarrinho in carrinho) {
        //criar elementos 
        let linha = document.createElement("tr")
        let campoSabor = document.createElement("td")
        let campoTamanho = document.createElement("td")
        let campoBorda = document.createElement("td")
        let campoQuantidade = document.createElement("td")
        let campoPrecoU = document.createElement("td")
        let campoPrecoT = document.createElement("td")
        let botoes = document.createElement("button")
        //criando nós 
        let textoSabor
        let textoTamanho
        let textoPrecoU 
        let textoBorda
        for (let indexSabores in pizzas.sabores) {
            if(indexSabores == carrinho[indexCarrinho].sabor ) {
                textoSabor = document.createTextNode(pizzas.sabores[indexSabores].nome)
            }
        }
        if(carrinho[indexCarrinho].tamanho == "P") {
            numprecoU = pizzas.sabores[indexCarrinho].precoP
            textoPrecoU = document.createTextNode(numprecoU)
            textoTamanho =  document.createTextNode("Pequeno") 
        }
        if(carrinho[indexCarrinho].tamanho == "M") {
            numprecoU = pizzas.sabores[indexCarrinho].precoM
            textoPrecoU = document.createTextNode(numprecoU)
            textoTamanho =  document.createTextNode("Médio") 
        }
        if(carrinho[indexCarrinho].tamanho == "G") {
            numprecoU = pizzas.sabores[indexCarrinho].precoG
            textoPrecoU = document.createTextNode(numprecoU)
            textoTamanho =  document.createTextNode("Grande") 
        }
        for(let indexBorda in pizzas.borda) {
            if(indexBorda == carrinho[indexCarrinho].borda) {
                textoBorda = document.createTextNode(pizzas.borda[indexBorda].nome)
            }
        }
        numprecoT = parseFloat((numprecoU  * carrinho[indexCarrinho].quantidade).toFixed(2))
        let textoQuantidade = document.createTextNode(carrinho[indexCarrinho].quantidade)
        let textoPrecoT = document.createTextNode(numprecoT)
        //vinculando nós aos elementos 
        campoSabor.appendChild(textoSabor)
        campoTamanho.appendChild(textoTamanho)
        campoBorda.appendChild(textoBorda)
        campoQuantidade.appendChild(textoQuantidade)
        campoPrecoU.appendChild(textoPrecoU)
        campoPrecoT.appendChild(textoPrecoT)

        linha.appendChild(campoSabor)
        linha.appendChild(campoTamanho)
        linha.appendChild(campoBorda)
        linha.appendChild(campoQuantidade)
        linha.appendChild(campoPrecoU)
        linha.appendChild(campoPrecoT)

        //vinculand os elementos ao document
        body.appendChild(linha)
    }
}

export function realizarPedido() {
    const nome = document.getElementById("nomeCliente").value;
    const endereco = document.getElementById("enderecoCliente").value;
    const telefone = document.getElementById("telefoneCliente").value;
    const numero = document.getElementById("numeroCliente").value;
    const cep = document.getElementById("cepCliente").value;
    const bairro = document.getElementById("bairroCliente").value;

    const pedido = {
        cliente: {
            nome,
            telefone,
            endereco,
            numero,
            cep,
            bairro
        },
        pizzas: carrinho
    }

    console.log(`pedido`)
    console.log(pedido)
}
import { pizzas } from "./pizzas.js"
import {verificarQuantidade} from "./validacao.js"

export let carrinho = new Array;

export function addCarrinho() {
    const selectSabor = document.getElementById("saboresPizza")
    const selectTamanho = document.getElementById("tamanhoPizza")
    const selectBorda = document.getElementById("bordaPizza")
    let quantidade = document.getElementById("quantidadePizza").value

    let sabor =  selectSabor.options[selectSabor.selectedIndex].value
    let tamanho =  selectTamanho.options[selectTamanho.selectedIndex].value
    let borda =  selectBorda.options[selectBorda.selectedIndex].value

    if(verificarQuantidade()) {
        const pizza = {
            sabor,
            tamanho,
            borda,
            quantidade,
            preco : calcularPreco(sabor,tamanho,borda)
        } 
        addPizzas(pizza) 
        criarTabela();
    }
}

function criarTabela() {
    let body = document.getElementById("bodytabelaPedidos")
    let tabela = document.getElementById("tabela-de-pedidos") 
    let textoSabor, textoTamanho,textoBorda

    tabela.style.display = "block";
    body.innerHTML = ''

    for (let indexCarrinho in carrinho) {
        //criando elementos 
        let linha = document.createElement("tr")
        let campoSabor = document.createElement("td")
        let campoTamanho = document.createElement("td")
        let campoBorda = document.createElement("td")
        let campoQuantidade = document.createElement("td")
        let campoPrecoU = document.createElement("td")
        let campoBotao = document.createElement("td")

        //criando nós 
        for (let indexSabores in pizzas.sabores) {
            if (indexSabores == carrinho[indexCarrinho].sabor) {
                textoSabor = document.createTextNode(pizzas.sabores[indexSabores].nome)
            }
        }
        if (carrinho[indexCarrinho].tamanho == "P") { 
            
            textoTamanho = document.createTextNode("Pequeno")
        }
        if (carrinho[indexCarrinho].tamanho == "M") { 
            textoTamanho = document.createTextNode("Médio")
        }
        if (carrinho[indexCarrinho].tamanho == "G") { 
            textoTamanho = document.createTextNode("Grande")
        }
        for (let indexBorda in pizzas.borda) {
            if (indexBorda == carrinho[indexCarrinho].borda) {
                textoBorda = document.createTextNode(pizzas.borda[indexBorda].nome)
            }
        } 
        let textoQuantidade = document.createTextNode(carrinho[indexCarrinho].quantidade)
        let textoPreco = document.createTextNode(`R$ ${(carrinho[indexCarrinho].preco * carrinho[indexCarrinho].quantidade).toFixed(2)}`)
        let botoes = document.createElement("button")
        let icone = document.createElement("i")

        //aplicando estilos
        botoes.classList.add("btn", "btn-sm",  "btn-danger")
        icone.classList.add("fas", "fa-times")

        //adicionando value
        botoes.setAttribute("value",indexCarrinho)

        //adiciondo evento
        botoes.addEventListener("click",(e) => {
            excluirItemCarrinho(tabela,body,botoes.value,)
            e.preventDefault()
        })

        //vinculando nós aos elementos 
        campoSabor.appendChild(textoSabor)
        campoTamanho.appendChild(textoTamanho)
        campoBorda.appendChild(textoBorda)
        campoQuantidade.appendChild(textoQuantidade)
        campoPrecoU.appendChild(textoPreco)
        botoes.appendChild(icone)
        campoBotao.appendChild(botoes)

        linha.appendChild(campoSabor)
        linha.appendChild(campoTamanho)
        linha.appendChild(campoBorda)
        linha.appendChild(campoQuantidade)
        linha.appendChild(campoPrecoU)
        linha.appendChild(campoBotao)

        //vinculand os elementos ao document
        body.appendChild(linha)
    }
    valorTotal()
}

function excluirItemCarrinho(tabela,body,index) {
    carrinho.splice(index,1)
    if(body.childElementCount == 1) {
        let precoTotal = document.getElementById("preco-total");
        precoTotal.style.display = "none"
        tabela.style.display = "none" 
    }else {
        criarTabela()
     }
}

//calcula todos os preços de carrinho
function valorTotal() {
    let pagar = document.getElementById("preco-total")
    let valorTotal = 0

    for(let index in carrinho) {
        valorTotal = valorTotal + carrinho[index].preco * carrinho[index].quantidade
    }

    pagar.innerHTML = ` Total : R$ ${valorTotal.toFixed(2)}`
    pagar.style.display= "block" 
}

//calcula o preço unitario de cada pizza com borda e tamanho
function calcularPreco(indexSabor,indexTamanho,indexBorda) {
    const {sabores,borda}  = pizzas
    let preco
    if(indexTamanho == 'P') {
        preco = sabores[indexSabor].precoP
    }
    if(indexTamanho == 'M') {
        preco = sabores[indexSabor].precoM
    }
    if(indexTamanho == 'G') {
        preco = sabores[indexSabor].precoG
    }
    preco = preco + borda[indexBorda].preco
    return preco
}

function addPizzas(pizza) { 
    let verificacao = true
    carrinho.forEach(item => {
        if(item.sabor == pizza.sabor & item.borda == pizza.borda & item.tamanho == pizza.tamanho) {
            item.quantidade = parseInt(item.quantidade) + parseInt(pizza.quantidade)
            verificacao = false 
        }
    }) 
    if(verificacao) {
        carrinho.push(pizza)
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
    console.log( pedido)
}
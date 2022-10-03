const frutas = ["laranja", "limão", "uva"];

// Faça com que os itens do array do arquivo script.js
//  sejam adicionados à página HTML, dentro dos itens `li` 
//  que estão na página. Repare que um dos itens "li" ficará vago. 
//  Vamos preenchê-lo no exercício 3.

const laranja = document.getElementById("fruta-1")
laranja.innerHTML += frutas[0]

const limao = document.getElementById("fruta-2")
limao.innerHTML += frutas[1]


const uva = document.getElementById("fruta-3")
uva.innerHTML += frutas[2]


// Crie um campo label e um campo input na página HTML, e preencha 
// o campo com o nome de mais uma fruta. Depois disso, escreva No
//  DevTools o código necessário para que seja possível imprimir o
//   valor do input escrito no console. Cole o comando aqui:

//     cole o código JS nesta área.

const adicionaItem = () =>{

const item = document.getElementById("texto")
const lista = document.getElementById("Lista-de-frutas")
lista.innerHTML += `<li>${item.value}</li>`
item.value = ""


}





// Crie uma função que faça com que o valor do input seja adicionado à 
// lista de frutas do exercício 1. Crie um botão, e utilize um evento 
// de onclick no botão criado, para que ao clicar no botão, o valor 
// do input do exercício 2 seja adicionado à lista.

// const adicionaItem = () => {

// const abacaxi = document.getElementById("abacaxi")
//     abacaxi.value = ""

//    abacaxi.innerHTML += 

// }

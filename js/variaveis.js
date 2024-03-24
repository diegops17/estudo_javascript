/* 
    VARIAVEIS
*/

//String
var texto = 'Curso de JavaScript'
let nome = 'Diêgo'

//O propmt sempre recebe valores como String, para fazer calculos precisa converter para number
let nome2 = prompt('Digite seu nome: ')
let idade = prompt('Digite sua idade: ')

//Number
//Int
var numeroInteiro = 7

//Float ou Double
var numeroFracionado = 78.9

//Boolean
var teste = true

//alert(numeroFracionado)
document.write(texto)
//document.write(texto.toString())
console.log(`Interpolação, concatenação, Somando ${numeroInteiro} + ${numeroFracionado} = `, 
numeroInteiro + numeroFracionado)

//Concatenação
document.write('<h2>Bem vindo ' + nome +'</h2>')

//Interpolação
document.write(`<h2>Bem vindo ${nome2} vejo que você tem ${idade} anos </h2>`)

//Fazendo cast de uma variavel
console.log(parseInt(idade) + 10)
/*
var lista_frutas = Array()
lista_frutas[1] = 'Banana'
lista_frutas[2] = 'Maçã'
lista_frutas[3] = 'Morango'
lista_frutas[4] = 'Uva'
lista_frutas[5] = true
lista_frutas[6] = 7
lista_frutas[7] = 8.9
lista_frutas[0] = 'hehehe'
*/

//var lista_frutas2 = Array(2, 1, 3, true, 'M')

var lista_frutas = []
lista_frutas[1] = 'Banana'
lista_frutas[2] = 'Maçã'
lista_frutas[3] = 'Morango'
lista_frutas[4] = 'Uva'
lista_frutas[5] = true
lista_frutas[6] = 7
lista_frutas[7] = 8.9
lista_frutas[0] = 'hehehe'

var lista_frutas2 = [2, 1, 3, true, 'M', 'Bob']

console.log(lista_frutas)
console.log(lista_frutas2)
//document.write(lista_frutas)

//Adicionar dado no final do array
lista_frutas2.push('Inseri no final do array via push')

//Adicionar dado no inicio do array
lista_frutas2.unshift('Inseri no inicio do array via unshift')

//Excluir dado no final do array
lista_frutas2.pop()

//Adicionar dado no inicio do array
lista_frutas2.shift()


//Localizar dado no array, retorna a posição que tá o dado salvao, caso ele não exista retorna -1
var auxiliar = lista_frutas2.indexOf('Bob')
console.log(auxiliar)
console.log('Dado que tá no array: ', lista_frutas2.indexOf('Bob'))
console.log('Dado que não tá no array: ', lista_frutas2.indexOf('doidera'))

if ( lista_frutas2.indexOf('doidera') === -1){
    console.log('Dado não existe no array')
}else{
    console.log('Dado existe no array')
}
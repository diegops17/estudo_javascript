var lista_funcionarios = ['Viviane', 'Rosa', 'Miguel', 'Lucas', 'Fernanda']
console.log(lista_funcionarios)

//forEach aguarda uma função de callback indicando como ele agir sobre o array
lista_funcionarios.forEach(function(valor, indice, array){
    console.log('INDICE: ', indice)
    console.log('VALOR: ', valor)
    //console.log('ARRAY: ', array)

    if (valor === 'Rosa'){
        lista_funcionarios[indice] = 'Hello World'
    }
})

console.log(lista_funcionarios)


/*
//Usando técnica wrapper para encapsular o array em uma variavel
var f = function(valor, indice){
    console.log('INDICE: ', indice, 'VALOR = ', valor)
}

lista_funcionarios.forEach(f)
*/
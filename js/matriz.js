var lista_coisas = []

lista_coisas['frutas'] = ['Banana', 'Maçã', 'Morango', 'Uva']

lista_coisas['pessoas'] = []
lista_coisas['pessoas']['a'] = 'João'
lista_coisas['pessoas']['b'] = 'Maria'
lista_coisas['pessoas']['c'] = 'José' 

console.log(lista_coisas)
console.log(lista_coisas['frutas'][3])
console.log(lista_coisas['pessoas']['b'])


//Adicionar dados no final do array
lista_coisas['pessoas'].push('Carla')

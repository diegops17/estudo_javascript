function calcularAreaTerreno(largura, comprimento){
    var area = largura * comprimento
    return area
}

var largura = 15
var comprimento = 25

var retorno = calcularAreaTerreno(largura, comprimento)
document.write( `O terreno ${largura} x ${comprimento} possui ${retorno}  m²`)

function subtracao(a, b){
    var resultado =  a - b
    document.write('<br\>Função void = ', resultado)
}

subtracao(10, 8)

/*Passando mais parâmetro do que foi declarado na função o JS descarta os demais, 
passando menos valores ou nenhum da um Not a number*/

function soma(a, b){
    //b = b === undefined ? 0 : b //Fazendo um tratameto caso o valor de b seja undefined
    return a + b
}
console.log(soma(7, 7))
console.log(soma(7, 7, 7))
console.log(soma(7))
console.log(soma())




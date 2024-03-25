var numero1 = parseFloat(prompt('Informe o primeiro número: '))
var operacao = prompt('Informe a operação [soma ou subtracao]: ')
var numero2 = parseFloat(prompt('Informe o segundo número: '))

function calcular(num1, oper, num2){
    //var resultado = oper == 'soma' ? (num1 + num2) : (num1 - num2)
    var resultado

    if (oper == 'soma'){
        resultado = num1 + num2

    }else if(oper == 'subtracao'){
        resultado = num1 - num2
    }else{
        resultado = 'Erro: Operação inválida'
    }

    return resultado
}

resposta = calcular(numero1, operacao, numero2)
document.write('O resultado é: ', resposta)
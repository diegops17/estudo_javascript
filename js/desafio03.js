var nome = prompt('Informe o seu nome: ')
var altura = parseFloat(prompt('Informe a sua altura em cm, ex: 170: '))
var peso = parseFloat(prompt('Informe o seu peso: '))

altura /= 100 //Convertendo cm para m

var imc = peso / (altura * altura)
imc = imc.toFixed(2)

var classificacao = ''

if (imc < 16){
    classificacao = 'Baixo peso muito grave'

}else if (imc >= 16 && imc <= 16.99){
    classificacao = 'Baixo peso grave'

}else if (imc >= 17 && imc <= 18.49){
    classificacao = 'Baixo peso'

}else if (imc >= 18.50 && imc <= 24.35){
    classificacao = 'Peso normal'

}else if (imc >= 25 && imc <= 29.99){
    classificacao = 'Sobrepeso'

}else if (imc >= 30 && imc <= 34.99){
    classificacao = 'Obesidade grau I'

}else if (imc >= 35 && imc <= 39.99){
    classificacao = 'Obesidade grau II'

}else if (imc >= 40){
    classificacao = 'Obesidade grau III Mórbida'

}else{
    classificacao = 'Erro, não foi possível classificar'
}

document.write(`${nome} possui o índice de massa corporal igual a ${imc}, sendo classificado como ${classificacao}`)
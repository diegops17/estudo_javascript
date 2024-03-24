//var resultado = <condição> ? <verdadeiro> : <falso>

const media = 7
var nota1 = prompt('Informe a primeira nota: ')
var nota2 = prompt('Informe a segunda nota: ')

var mediaAluno = ((parseFloat(nota1) + parseFloat(nota2)) / 2)

var resultado = mediaAluno >= media ? 'Aprovado' : 'Reprovado'
document.write(resultado)
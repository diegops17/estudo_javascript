const media = 7
var nota1 = prompt('Informe a primeira nota: ')
var nota2 = prompt('Informe a segunda nota: ')

var mediaAluno = ((parseFloat(nota1) + parseFloat(nota2)) / 2)

if (mediaAluno >= media){
    document.write(`Aprovado com a média ${mediaAluno}`)
}else if(mediaAluno >= 5 && mediaAluno <= 6.9){
    document.write(`Recuperação com a média ${mediaAluno}`)
}else{
    document.write(`Reprovado com a média ${mediaAluno}`)
}


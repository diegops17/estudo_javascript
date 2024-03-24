var idade = prompt('Informe sua idade: ')
idade = parseInt(idade)

if (idade >= 0 && idade <= 14){
    document.write('Criança')
}else if (idade >= 15 && idade <= 29){
    document.write('Jovem')
}else if (idade >= 30 && idade <= 59){
    document.write('Adulto')
}else if (idade >= 60){
    document.write('Idoso')
}else{
    document.write('Erro: Informe uma idade válida')
}
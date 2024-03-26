/*Document Object Model 
getElementsByID()
getElementsByTagName()
getElementsByClassName()
getElementsByName()
*/

/*var nome = document.getElementById('nome_usuario')
document.getElementsByTagName('input')
document.getElementsByClassName('classe-nome')
document.getElementsByName('nome')
console.log(nome)*/

function verificaCaracter(){
    //Pegar valor do HTML
    var caracter = document.getElementById('entrada-dados').value

    //Limpar campo no HTML
    document.getElementById('entrada-dados').value = ''
    
    caracter.trim() //Apagar espaços

    switch(caracter){
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        //Adicionar o caracter no campo número
        document.getElementById('numeros').value += caracter 
        break
        default:
        //Adicionar o caracter no campo letra 
        document.getElementById('letras').value += caracter       
    }
}
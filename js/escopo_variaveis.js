/*Escopo de variaveis
global - referente ao script como todo
função - conteúdo inserido dentro de uma função
bloco - consteúdo usado dentro de if-else, switch-case, while, do-while, for
*/

var serie = 'GoT'

if (true){
    document.write('Tou no if. Variavel do escopo global = ', serie)

    //Escopo de bloco
    var serie2 = 'The Walking Dead'
}

function x(){
    document.write('<br/>Tou na função. Variavel do escopo global = ', serie)

    /*Escopo de função
    variaveis de escopo de função não sofrem hosting igual a variaveis de escopo de bloco
    */
    var serie3 = 'Titãs'
}
x()

/*Acontece um hosting o JS faz uma elevação da variavel do escopo de bloco para global 
*/
document.write('<br/>Chamado a variavel de escopo de bloco dentro do if = ', serie2)

/*Da erro basta olhar no console do navegador
*/
document.write('<br/>Chamado a variavel de escopo de função dentro do funcção = ', serie3)
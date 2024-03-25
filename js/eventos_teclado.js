/*Eventos de teclado
onkeydown acionado quando uma tecla é pressionada, tratar caracteres antes de se exibido
onkeypress acionado entre os dois eventos acionado quando uma tecla de caractere é mantida pressionada
onkeyup acionado quando a tecla é liberada
*/

function tecla_pressionada(){
    alert('Evento disparado onkeydown')
}

function tecla_solta(){
    alert('Evento disparado onkeyup')
}

function press(){
    alert('Evento disparado onkeypress')
}
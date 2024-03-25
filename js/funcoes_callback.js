/*Funções de callback são func~~oes enviadas como parâmentro para outras funções
Funções de call back são funções anônimas
*/
function exibirArtigo(id, callbackSucesso, callbackErro){
    if(true){
        callbackSucesso('Callback sucesso', 'Deu sucesso')
    }else{
        callbackErro('Erro ao recuperar os dados')
    }
}

//Utilizando uma função anônima com a técnica de wrapper
var callbackSucesso = function(titulo, descricao){
    document.write(`<h1>${titulo}</h1>`)
    document.write(`<p>${descricao}</p>`)

}

//Utilizando uma função anônima com a técnica de wrapper
var callbackErro = function(erro){
    document.write(`<h1>${erro}</h1>`)
}

//exibirArtigo(1, function(){}, function(){})

//Nesse caso não usa o () para passagem do parametro, passando a referência da função e naão a função em si
exibirArtigo(1, callbackSucesso, callbackErro)
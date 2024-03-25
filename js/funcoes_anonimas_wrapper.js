//Funções anônimas não possuem nome
//Wrapper é a técnica de embrulhar funções, nesse caso a var exibirSaudacao está recebendo a function anônoma
var exibirSaudacao = function(nome) {
    document.write(nome, ' Hello Função anônima')
}

exibirSaudacao('João')


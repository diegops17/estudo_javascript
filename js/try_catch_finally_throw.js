/*
TRY - Tente
CATCH - Pegar
FINALLY - Finalemnte
THROW - Lançar, pode parar a aplicação quando ocorre erro
*/

var video = Array()
video[1] = Array()
video[1]['nome'] = 'DBZ'
video[1]['categoria'] = 'Anime'

function getVideo(video){
   
    try{
         //O que pode gerar erro vai aqui
        console.log(video[0]['nome'])

    }catch(erro){ 
        //Recebe o erro e trata
        console.log('CATCH Aqui tratamos o erro')
        //console.log(erro)
        console.log(tratarErro(erro))
        //throw new erro('Vou matar à aplicação')
    }finally{
        console.log('Sempre executa')
    }
}

function tratarErro(e){
    console.log(e, 'Erro tratado na função especifica')
}
getVideo(video)
let pontosHumano = 0
let pontosPc = 0
let empate = 0
let campeao = ''

function salvarNome(){
    nomeDigitado = document.getElementById('campo-nome-jogador').value
    document.getElementById('nome-humano').innerHTML = nomeDigitado
}

function gerarEscolhaMaquina(){
    let opcao_maquina = ''
    let numero_aleatorio = Math.floor(Math.random() * 3)

    if(numero_aleatorio === 0){
        opcao_maquina = 'pedra'
    }else if(numero_aleatorio === 1){
        opcao_maquina = 'papel'
    }else if(numero_aleatorio === 2){
        opcao_maquina = 'tesoura'
    }

    return opcao_maquina
}

function opcaoJogador(humano, opcao){
   verificarEscolhas(humano, opcao)
   
}

function verificarEscolhas(jogador, escolha){
    let escolhaPc = gerarEscolhaMaquina()
    console.log('HUMANO: ', escolha , 'x PC: ', escolhaPc)
 
    rodada(jogador, escolha, escolhaPc)
}

function rodada(tipoJogador, escolhaHumano, escolhaPc){
    if (tipoJogador === 'humano'){
        if(
            (escolhaHumano == 'pedra' && escolhaPc == 'tesoura') ||
            (escolhaHumano == 'tesoura' && escolhaPc == 'papel') ||
            (escolhaHumano == 'papel' && escolhaPc == 'pedra')){
                pontosHumano += 1
                document.getElementById('pontuacao-humano').innerHTML = pontosHumano
                
                console.log('HUMANO venceu, PONTOS: ', pontosHumano )
        }else if(
            (escolhaPc == 'pedra' && escolhaHumano == 'tesoura') ||
            (escolhaPc == 'tesoura' && escolhaHumano == 'papel') ||
            (escolhaPc == 'papel' && escolhaHumano == 'pedra')){
                pontosPc += 1
                document.getElementById('pontuacao-pc').innerHTML = pontosPc
                console.log('PC venceu, PONTOS: ', pontosPc)
        }else{
            empate += 1
            document.getElementById('empate').innerHTML = empate
            console.log('EMPATE')  
        }
    }
    verificarCampeao()
}

function verificarCampeao(){
    //Testar esse
    /* if(pontosHumano === 3 && pontosPc < 3){
        campeao = 'HUMANO'
        console.log(campeao, ' CAMPEÃO', pontosHumano)
    }elseif(pontosPc === 3 && pontosHumano < 3){
        campeao = 'PC'
        console.log(campeao, ' CAMPEÃO', pontosPc) 
    }*/

    if(pontosHumano === 3){
        campeao = 'HUMANO'
        console.log(campeao, ' CAMPEÃO', pontosHumano)
    }else if(pontosPc === 3){
        campeao = 'PC'
        console.log(campeao, ' CAMPEÃO', pontosPc)
    }
}

//console.log(pontosHumano, pontosPc, campeao)
//let nomeJogador = jogador === 'humano' ? 'humano' : 'pc' 
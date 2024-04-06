//Definir área visivel do browser
let altura = largura = 0

function ajustarTamanhoTela(){
    altura = window.innerHeight
    largura = window.innerWidth

    console.log(altura, largura)
}

ajustarTamanhoTela()
function amarelo(){
    document.getElementById('campo-texto').style.backgroundColor = '#fff000'
}

function resetar(){
    document.getElementById('campo-texto').style.backgroundColor = '#FFF'

    var texto = document.getElementById('campo-texto').value
    console.log(texto)

    console.log(texto.length)

    if (texto.length < 3){
        document.getElementById('campo-texto').style.backgroundColor = '#FF0000'

    }else if(texto.length > 3){
        document.getElementById('campo-texto').style.backgroundColor = '#009900'
    }
}
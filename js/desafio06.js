var objetos = ['Cadeira', 'Impressora', 'Garfo']

function adicionarDados(){
    var dadoCampoTexto = document.getElementById('campo-texto').value

    if (dadoCampoTexto === ''){
        alert('Informe um valor válido')
    }else{
        if (objetos.includes(dadoCampoTexto)){
            alert('Objeto já foi adicionado')
            document.getElementById('campo-texto').value = ''

        }else{
            console.log('Array inicial', objetos)
            objetos.push(dadoCampoTexto)
            alert('Dado adicionado com sucesso!')
            console.log('Array após inserção', objetos)

            document.getElementById('campo-texto').value = ''
        }
    }
}

function ordenarDados(){
    console.log('Array Incial', objetos)
    console.log('Array Ordenado', objetos.sort())
}
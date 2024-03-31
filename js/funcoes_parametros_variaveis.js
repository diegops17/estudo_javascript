function soma(){
    /*arguments É UMA INSTRUÇÃO QUE EXISTE PARA FUNÇÕES JS QUE RETORNA ALGO PARECIDO COM ARRAY (É UM OBJETO), 
    É UMA VARIAVEL LOCAL */
    console.log(arguments)
    var resultado = 0
    for(var i in arguments){
        //console.log(arguments[i])
        resultado += arguments[i]
    }
    return resultado
    
}
console.log(soma())
console.log(soma(7, 7))
console.log(soma(7, 7, 7))
console.log(soma(7))


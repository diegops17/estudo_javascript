var x = 1
while(x <= 10){
    document.write(x, '<br/>')
    x++
    //x += 2 //Pular de 2 em 2
}

document.write('<hr/>')

var x2 = 1
while(x2 <= 10){
   
    document.write(x2, '<br/>')

    if(x2 === 7){
        document.write(x2, ' Chegou no Sete usando o break <br/>')
        break
    }
    
    x2++
}

document.write('<hr/>')

var x3 = 1
while(x3 <= 10){
    x3++
    if(x3 === 5){
        continue
    }
    document.write(x3, ' Chegou no 5 usando continue <br/>')
}
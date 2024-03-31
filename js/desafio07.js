var lista_pessoas = ['Gertrudes', 'Amadeu', 'Godofredo', 'Cremilda', 'Astrogildo']

for(x = 0; x < lista_pessoas.length; x++){
    document.write(lista_pessoas[x], '<br/>')
}


document.write('<hr/>')

var x = 1

while(x <= 10){
    var y = 1

    while(y <= 10){
        document.write(x, ' x ', y, ' = ', (y * x), '<br/>')

        y++
    }
    x++
    document.write('<hr/>')
}
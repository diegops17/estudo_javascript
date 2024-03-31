var lista_frutas = ['Banana', 'Maçã', 'Morango', 'Uva']
var y = x = 0

while(y < lista_frutas.length){
    document.write(lista_frutas[y], '<br/>')

    y++
}

document.write('<hr/>')


while(x < lista_frutas.length){
   document.write(
    '<ul>',
        '<li>', lista_frutas[x] , '</li>',
    '</ul>'
   )

    x++
}
                                         



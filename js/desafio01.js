var a = 10
var b = 20
var c = null //Variavel auxiliar

document.write('A = ', a, '<br/>')
document.write('B = ', b, '<br/>')
document.write('C = ', c, '<hr/>')

c = a
a = b
b = c
c = null
document.write('A = ', a, '<br/>')
document.write('B = ', b, '<br/>')
document.write('C = ', c, '<hr/>')
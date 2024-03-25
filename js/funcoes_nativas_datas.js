//É preciso instaciar criando um objeto do tipo date
var data = new Date()

document.write('<br/>Data do dia = ', data.getDate())
//getMonth() pega de 0 a 11, precisa somar +1 para apresentar corretamente
document.write('<br/>Mês = ', data.getMonth() + 1)
document.write('<br/>Ano = ', data.getFullYear())
document.write('<br/>Hora = ', data.getHours())

document.write('<hr/>')

//Adicionar ou remover dias da data
document.write('<br/>Data atual = ', data.toString())
data.setDate(data.getDate() + 3)
document.write('<br/>Data manipulada = ', data.toString())

document.write('<hr/>')

//Adicionar ou remover meses da data
document.write('<br/>Data com mês atual = ', data.toString())
data.setMonth(data.getMonth() + 3)
document.write('<br/>Mês manipulado = ', data.toString())

document.write('<hr/>')

//Adicionar ou remover anos da data
document.write('<br/>Data com ano atual = ', data.toString())
data.setFullYear(data.getFullYear() + 3)
document.write('<br/>Ano manipulado = ', data.toString())

document.write('<hr/>')
var data1 = new Date(2017, 0, 15)

var data2 = new Date(2017, 1, 23)

document.write('<br/>', data1.toString())
document.write('<br/>', data2.toString())

/*Converrter as datas para um valor que possa ser calculador, 
getTime() pega os milisegundos de 1970 até o ano atual*/
document.write('<br/>','<br/>', data1.getTime())
document.write('<br/>', data2.getTime())

//Encontrar a quantidade de milisegundos entre data1 e data2
var milisegundosEntreDatas = Math.abs(data1.getTime() - data2.getTime())
document.write('<br/> Milisegundos entre datas = ', milisegundosEntreDatas, '<br/>')

//Converter milisegundos para dais Quantos milisegundos existem em um dia
var milisegundosPorDia = (1*24*60*60*100)
document.write('<br/> 1 dia tem = ', milisegundosPorDia , ' milisegundos')

document.write('<br/> A diferença entre data1 e data2 é = ', Math.ceil(milisegundosEntreDatas / milisegundosPorDia), ' dias')

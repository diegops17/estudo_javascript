/*var num1 = parseInt(prompt('Digite o primero valor'))
var num2 = parseInt(prompt('Digite o segundo valor'))
*/

var num1 = 9
var num2 = 2

document.write(`A soma de ${num1} e ${num2} é = `, (num1 + num2), '<br/>')
document.write(`A subtração de ${num1} e ${num2} é = `, (num1 - num2), '<br/>')
document.write(`A multiplicação de ${num1} e ${num2} é = `, (num1 * num2), '<br/>')
document.write(`A divisão de ${num1} e ${num2} é = `, (num1 / num2), '<br/>')
document.write(`O módulo de ${num1} e ${num2} é = `, (num1 % num2), '<br/>')
//document.write(`O pré incremento de ${num1} é = `, (++num1), '<br/>')
//document.write(`O pós incremento de ${num1} é = `, (num1++), '<br/>')
document.write(`O pré decremento de ${num1} é = `, (--num1), '<br/>')
/*document.write(`O pós decremento de ${num1} é = `, (num1--), '<br/>')
document.write(num1)*/

var num3 = 100
num3 += num2
//num3 -= num2
document.write('Variavel 3 = ', num3)
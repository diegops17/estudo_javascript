var nome = 'Estudando Javascript'
document.write('Texto manipulado = ', nome)
document.write('<br/>Quantidade de caracteres = ', nome.length)
document.write('<br/>Retorna o valor ques está em um indice = ', nome.charAt(7))
//indexof() caso o caractere informado não exista na String ele sempre vai retornar -1
document.write('<br/>Retorna o indice da primeira ocorrencia informada nesse caso a = ', nome.indexOf('a'))
document.write('<br/>Substituir texto na String = ', nome.replace('Estudando', 'Praticando'))
document.write('<br/>Extrair parte de um String = ', nome.substring (10, 14))
document.write('<br/>Caixa baixa = ', nome.toLocaleLowerCase())
document.write('<br/>Caixa alta = ', nome.toLocaleUpperCase())
document.write('<br/>Remove espaços na extremidades = ', nome.trim())
document.write('<br/>', nome.toString())
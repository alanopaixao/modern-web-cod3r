const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3)) //unicode
console.log(escola.indexOf("C")) //posição do caractere selecionado

console.log(escola.substring(1)) // a partir do indice selecionado ate o fim
console.log(escola.substring(0, 3))

console.log('Escola '.concat(escola).concat("!"))
console.log('Escola ' + escola + '!')

console.log(escola.replace(3, 'e'))
console.log(escola.replace(/\d/g, 'e')) // expressão regular regex (substitui todas as letras que contrm na frase) - g = global

console.log("Ana, Maria, José, Carlos".split(',')) // array

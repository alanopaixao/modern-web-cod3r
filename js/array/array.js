console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')

console.log(aprovados)

aprovados = ['Bia', 'Calors', 'Ana']
console.log(aprovados)
console.log(aprovados[0])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Maria'
aprovados.push('Abia') //melhor maneira para inserir 
console.log(aprovados.length)
console.log(aprovados)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort() // ordenar os espaços vazios
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados)
aprovados.splice(1, 1, 'Elemento1', 'Elemento2') // escolhe indice, quantidade de indice a ser deletado, insere indice..
console.log(aprovados)
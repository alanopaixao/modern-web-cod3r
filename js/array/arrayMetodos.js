const pilotos = ['Vettel', 'Alonso', 'Rainkkonen', 'Massa']
pilotos.pop() // massa quebrou o carro! (remove o ultimo elemento do array)
console.log(pilotos)

pilotos.push('Verstappen') //insere no final
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento
console.log(pilotos)

pilotos.unshift('Hamilton') // adiciona no primeiro elemento
console.log(pilotos)

// splice pode adicionar e remover elementos

//adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//remover
pilotos.splice(3, 1) // Massa quebrou :(
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // retorna novo array a partir da posição selecionada
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // vai até o ultimo indice sem selecionar 
console.log(algunsPilotos2)
let valor // não iniciado
console.log(valor)
// console.log(valor2) //  não declarado

valor = null // inicializado com ausencia de valor
console.log(valor)
// console.log(valor.toString()) // erro

const produto = {}
console.log(produto.preco)

produto.preco = 3.50
console.log(produto.preco)

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco)
delete produto.preco
console.log(produto)

produto.preco = null // sem preco
console.log(!!produto.preco)
console.log(produto)

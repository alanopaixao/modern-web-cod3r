const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
valores[10] = 9.9
console.log(valores)
console.log(valores.length) // contar quantos valores existe no array

valores.push({id: 3}, false, null, 'teste')

console.log(valores)

valores.push('cachorro')
console.log(valores)

console.log(valores.pop()) // remover o ultimo valor
delete valores[0]
console.log(valores)

console.log(typeof valores)
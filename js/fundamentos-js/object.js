const prod1 = {}
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4980.90
prod1['Desconto Legal'] = 0.40 // evitar atributo com espaço

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    modelo: {
        cor: 'branca',
        tipo: 'regata'
    }
}

console.log(prod2)
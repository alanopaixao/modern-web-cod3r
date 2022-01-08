// coleção dinâmica de pares chave/valor

const produto = new Object
produto.nome = 'cadeira'
produto['Marca do produto'] = 'Genérica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['Marca do produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 10
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'ana',
        idade: 42
    }],
    calcularValorDoSeguro: function(){
        // ...
    }
}

console.log(carro)

carro.proprietario.endereco.numero = 100
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante'
delete carro.condutores[1]
console.log(carro)
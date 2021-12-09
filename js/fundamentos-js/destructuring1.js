// novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        rua: "ABC",
        numero: 123
    }
}

const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade: i } = pessoa
console.log(n, i)

const { sobrenome, bemhumorado = true } = pessoa
console.log(sobrenome, bemhumorado)

const{endereco: {rua, numero, cep}} = pessoa
console.log(rua, numero, cep)

const {conta: {ag, numero}} = pessoa
console.log(ag, numero)
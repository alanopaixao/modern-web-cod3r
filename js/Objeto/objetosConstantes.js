// const grava em um endereço
const pessoa = {nome: 'Joao'}
pessoa.nome = 'Pedro'

console.log(pessoa)

// tentando alterar um novo endereco
//pessoa = {nome: 'Ana'}

Object.freeze(pessoa) // congelar objeto

pessoa.nome = 'Maria'
pessoa.endereco = 'Rua ABC'
console.log(pessoa.nome)

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({nome: 'João'})
pessoaConstante.nome = 'Ana'
console.log(pessoaConstante)
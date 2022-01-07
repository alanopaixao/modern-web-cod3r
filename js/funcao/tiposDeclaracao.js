console.log(soma(3, 4)) // o Interpretador lê primeiro as funções e depois o código

// não vai ler antes das funções pois as funções foram atribuidas a uma variável
console.log(sub(3, 4))
console.log(mult(3, 4))

// function declaration
function soma(x, y) {
    return x + y
}

// function expression

const sub = function (x, y) {
    return x - y
}

// named function expression
const mult = function mult(x, y) {
    return x * y
}
// Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração, multiplicação e divisão desses valores.

function calcular(n1, n2){
    soma = n1 + n2
    divisao = n1 / n2
    multiplicacao = n1 * n2
    subtracao = n1 - n2

    return console.log(soma, divisao, multiplicacao, subtracao)
}

calcular(5, 5)

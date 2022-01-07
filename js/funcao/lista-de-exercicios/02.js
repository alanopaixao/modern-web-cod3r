// Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
// Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
// Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
// ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
// triângulo).

function triangulo(a, b, c) {
    if (a == b && a == c) {
        console.log(`Equilátero: Os três lados são iguais | ${a}, ${b} e ${c}`)
    } else if (a != b && a != c && b != c) {
        console.log(`Escaleno: Todos os lados são diferentes | ${a}, ${b} e ${c}`)
    } else {
        console.log(`Isósceles: Dois lados iguais | ${a}, ${b} e ${c}`)
    }
    return 
}

triangulo(10, 10, 10)
triangulo(10, 15, 10)
triangulo(10, 12, 14)
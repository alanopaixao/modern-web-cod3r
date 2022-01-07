// Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
// e o resto da divisão destes dois valores.

function valores(dividendo, divisor){
    quociente = dividendo / divisor
    resto = dividendo % divisor
    
    return console.log(quociente, resto)
}

valores(125, 5)
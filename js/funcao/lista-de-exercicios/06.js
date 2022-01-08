// Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A 
// primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda 
// retornará o valor da aplicação sob o regime de juros compostos. 

function jurosSimples(capital, taxaJuros, tempoAplicacao){
    juros = capital * taxaJuros * tempoAplicacao
    valorTotal = capital + juros

    return {
        capital: capital,
        taxaDeJuros: taxaJuros,
        jurosAcumulado: juros.toFixed(2),
        TempoAplicado: `${tempoAplicacao} Mês(es)`,
        valorTotal: valorTotal.toFixed(2)
    }
}

function jurosComposto(capital, taxaJuros, tempoAplicacao){
    meses = 0
    capitalInicial = capital
    while(meses < tempoAplicacao){
        capital += capital * taxaJuros
        meses++
    }
    jurosAcumulado = capital - capitalInicial
    return {
        capital: capitalInicial,
        taxaDeJuros: taxaJuros,
        jurosAcumulado: jurosAcumulado.toFixed(2),
        TempoAplicado: `${tempoAplicacao} Mês(es)`,
        valorTotal: capital.toFixed(2)
    }
}

console.log('Juros Simples:')
console.log(jurosSimples(1000, 0.3, 12))
console.log(' ')
console.log('Juros Composto:')
console.log(jurosComposto(1000, 0.3, 12))
//Função em JS é Frist-Class Object (citizens)
// Higher-order function

// criar de forma literal
function fun1() { }

//armazenar em uma variavel
const fun2 = function () { }

//armazenamento em um array
const array = [function (a, b) { return a + b }, fun1, fun2]
console.log(array[0](2, 3))

//armazenamento em um atributo de objeto
const obj = {}
obj.falar = function () { return 'Opa' }
console.log(obj.falar())

//passar funcao como parametro
function run(fun) {
    fun()
}

run(function () { console.log("Executando..") })

//uma funcao pode retorna/conter uma funcao
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(8, 5)(5)
const cincoMais = soma(2, 3)
cincoMais(4)
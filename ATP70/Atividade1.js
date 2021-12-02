//Crie um arquivo para criação de uma calculadora. 
//Adicione 4 métodos para realizar as 4 operações básicas da matemática. 
//Realize a chamada dos 4 métodos e imprima seus resultados.

function somar(v1, v2){
    return v1 + v2;
}

function subtrair(v1, v2){
    return v1 - v2;
}

function dividir(v1, v2){
    return v1 / v2;
}

function multiplicar(v1, v2){
    return v1 * v2;
}

console.log("O resultado da soma é:", somar(100,20));
console.log("O resultado da subtração é:", subtrair(100, 20));
console.log("O resultado da divisão é:", dividir(100, 20));
console.log("O resultado da multiplicação é:", multiplicar(100,20));
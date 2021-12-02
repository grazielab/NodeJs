//Crie um arquivo adicione uma variável inteira com qualquer valor. 
//Calcule o fatorial deste valor utilizando o for e imprima o resultado no terminal.

let valor = 11;
let fatorial = 1;

for(let i = valor; i > 0; i--){
    fatorial *= i;
    console.log(i, fatorial);
}

console.log("O fatorial de " + valor + " = " + fatorial);
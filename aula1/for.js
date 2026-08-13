const prompt = require("prompt-sync")()

console.log("Pré for");

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

console.log("pós for");

let inputTabuadaStr = prompt("Digite um número para saber a tabuada: ");

let numeroTabuada = Number(inputTabuadaStr);

if (numeroTabuada === NaN) {
    console.log("Favor digitar um número.");
}

console.log("Tabuada de: " + numeroTabuada);

for (let i=0; i<=10; i++) {
    //exemplo com concatenação de strings
    // console.log(numeroTabuada + " * " + i + " = " + numeroTabuada*i);

    //exemplo com Template String
    console.log(`${numeroTabuada} * ${i} = ${numeroTabuada*i}`);
}

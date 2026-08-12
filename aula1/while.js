const prompt = require("prompt-sync")()

let cont = 0;

while (cont <= 5) {
    console.log(cont);
    cont++;
}

console.log("Pós while");



let inputStr = prompt("Digite um número: ");

let inputNumber = Number(inputStr);

while (Number.isNaN(inputNumber)) {
    inputStr = prompt("Favor digitar um número: ");
    inputNumber = Number(inputStr);
}

console.log(inputNumber);

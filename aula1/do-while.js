const prompt = require("prompt-sync")();

let n = 10;

do {
  console.log("executou 1x");
} while (n > 10);



let inputNumber;
do {
  let inputStr = prompt("Digite um número: ");
  inputNumber = Number(inputStr);
} while (Number.isNaN(inputNumber));

console.log("Numero digitado: " + inputNumber);

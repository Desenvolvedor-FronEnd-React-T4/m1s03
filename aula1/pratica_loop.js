const prompt = require("prompt-sync")()

//conte de 5 até 1 com for e escreva "Já!"
for (let i = 5; i >= 1; i--) {
  console.log(i);
}
console.log("Já!");


//some os números de 1 a 10 com while (dá 55)
let soma = 0;
let i = 1;

while (i <= 10) {
  soma += i;
  i++;
}

console.log("A soma é:", soma);



let soma2 = 0;
for (let i = 1; i <= 10; i++) {
  console.log('acumula ' + i + ' em ' + soma2);
  soma2 += i;
  console.log('acumulou ' + soma2);
}
console.log(`\nA soma é ${soma2}`);



//gere um número (de 1 a 5, por exemplo) e peça para o usuário adivinhar, até acertar.
let numero = 3;
let tentativa = 0;

while (tentativa != numero) {
    tentativa = Number(prompt("Adivinhe o número de 1 a 5:"));
}

console.log("Acertou!");

let numeroRandom = 3;

let palpite = -1;
do { 
  palpite = Number(prompt("Adivinhe o número (de 1 a 5): "));
  if (palpite !== numeroRandom) {
    console.log("Tente novamente!");
  }
} while (palpite !== numeroRandom);

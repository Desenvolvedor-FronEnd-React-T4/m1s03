//----------------------------------------
//1-Conta regressivo de 5 a 1 e imprime ja
for (let i = 5; i >= 1; i--) {
  console.log(i);
}
console.log("Já!");
//----------------------------------------
//2-somar de 1 a 10
let soma = 0;
let i = 1;
while (i <= 10) {
  soma += i;
  i++;
}
console.log(`\nA soma é ${soma}`);
//----------------------------------------
//3-Gere um numero e adivinhe
const input = require('prompt-sync')();

// Gera um número aleatório inteiro entre 1 e 5
const numeroRandom = Math.floor(Math.random() * 5) + 1;
let palpite;
//TODO uso para debug console.log("\nnumeroRandom", numeroRandom);
while (palpite !== numeroRandom) {
  palpite = Number(input("Adivinhe o número (de 1 a 5): "));
  
  if (palpite !== numeroRandom) {
    console.log("Tente novamente!");
  }
}
console.log("Você acertou!");
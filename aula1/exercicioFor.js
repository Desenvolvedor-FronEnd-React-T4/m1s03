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
  console.log('acumula '+ i + ' em ' + soma);
  soma += i;
  console.log('acumulou '+soma); 
  i++;
}
console.log(`\nA soma é ${soma}`);
/*
let soma = 0;

for (let i = 1; i <= 10; i++) {
  console.log('acumula ' + i + ' em ' + soma);
  soma += i;
  console.log('acumulou ' + soma);
}

console.log(`\nA soma é ${soma}`);
*/
//----------------------------------------
//3-Gere um numero e adivinhe
const input = require('prompt-sync')();

// Gera um número aleatório inteiro entre 1 e 5
const numeroRandom = Math.floor(Math.random() * 5) + 1;
//Math.floor -> Arredonda para baixo
//Math.trunc -> Apenas trunca
//Math.ceil -> Arredonda para cima, teria que colocar uma proteção caso o valor gerado for exatamente ZERO
//             Math.ceil(Math.random() * 5) || 1
let palpite = -1;
console.log("\nnumeroRandom", numeroRandom);
while (palpite !== numeroRandom) {
  palpite = Number(input("Adivinhe o número (de 1 a 5): "));
  
  if (palpite !== numeroRandom) {
    console.log("Tente novamente!");
  }
}
/*
Para não precisar inicializar o palpite, poderia se utilizar do .. while
do { 
  palpite = Number(input("Adivinhe o número (de 1 a 5): "));
  if (palpite !== numeroRandom) {
    console.log("Tente novamente!");
  }
} while (palpite !== numeroRandom);  
*/
console.log("Você acertou!");
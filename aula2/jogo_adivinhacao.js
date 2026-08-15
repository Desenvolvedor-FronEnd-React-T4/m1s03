const prompt = require("prompt-sync")();

let minUsuario;
let maxUsuario;
do {
  console.log("Favor ler as instruções com atenção!");
  minUsuario = Number(prompt("Escolha o menor número: "));
  maxUsuario = Number(prompt("Escolha o maior número: "));
} while (maxUsuario <= minUsuario);

const aleatorio = gerarNumeroAleatorio(minUsuario, maxUsuario);

let palpite = Number(
  prompt(`Adivinhe o número de ${minUsuario} a ${maxUsuario}: `),
);
let cont = 1;

while (palpite !== aleatorio) {
  console.log(darDica(palpite, aleatorio));
  palpite = Number(prompt("Tente novamente: "));
  cont++;
}

console.log(`Você acertou em ${cont} tentativas! O número era: ${aleatorio}.`);

function darDica(palpite, alvo) {
  if (palpite > alvo) {
    return "o alvo está abaixo.";
  }
  return "o alvo está acima.";
}

function gerarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

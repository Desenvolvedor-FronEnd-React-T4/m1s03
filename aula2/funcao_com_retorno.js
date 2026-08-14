const prompt = require("prompt-sync")();

function somar(a, b) {
  return a + b;
}

let numeroA = Number(prompt("Digite um numero: "));
let numeroB = Number(prompt("Digite outro numero: "));

console.log(
  `Resultado da soma de ${numeroA} com ${numeroB} é: ${somar(numeroA, numeroB)}`,
);

function nomeCompleto(nome, sobrenome) {
    return nome + " " + sobrenome;
}

let nome = prompt("nome: ");
let sobrenome = prompt("sobrenome: ");

console.log(nomeCompleto(nome, sobrenome));

function ehMaiorDeIdade(idade) {
    return idade >= 18
}

let idadeUsuario = prompt("idade: ");

if (ehMaiorDeIdade(idadeUsuario)) {
    console.log("Pode acessar");
} else {
    console.log("Não é permitido para menores");
}

const prompt = require("prompt-sync")();

function teste() {
  let secreto = 10; // só existe aqui dentro
}
teste();

// console.log(secreto); // ❌ erro: não existe aqui fora



function saudacao(nome) {
  if (
    typeof nome === "undefined" ||
    (typeof nome === "string" && nome.trim().length < 1)
  ) {
    nome = "visitante";
  }
  // console.log("Olá, " + nome + "!");
  console.log(`Olá, ${nome.trim()}!`);
}

let nomeUsuario = prompt("Qual seu nome? ");

saudacao(nomeUsuario);

function criarPerfil(nome, idade, cidade = "Não informada") {
  console.log("Nome: " + nome);
  console.log("Idade: " + idade);
  console.log("Cidade: " + cidade);
  console.log("---");
}

let idade = prompt("Digite sua idade: ");
let cidade = prompt("Digite sua cidade: ");

// Passando todos os argumentos
criarPerfil(nomeUsuario, idade, cidade);

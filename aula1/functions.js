function saudacao(nome = "visitante") {
  if (!nome || !nome.trim()) {
    nome = "visitante";
  }

  console.log(`Olá, ${nome}!`);
}

function escreveNome(nome, index) {
  console.log(index, nome);   
  index++;
  if (index<=10) {
    escreveNome(nome, index);
  }
}

function escreveNomeIA(nome, index = 1, limite = 10) {
  if (index > limite) return;

  console.log(`${index}: ${nome}`);

  escreveNomeIA(nome, index + 1, limite);
}
//Uso
const input = require('prompt-sync')();

let nome = input("Digite seu nome: ");
let index =1;
escreveNome(nome, index);

escreveNomeIA(nome);
saudacao(nome);

//Declaração das arrow functions
const input = require('prompt-sync')();

const mensagem = () => console.log("Ola Mundo!");
let arrowFunctionNome = (nome) => {
  console.log(nome);   
}
let nome = input("Digite seu nome: ");

const arrowFunctionSaudacao = (nome = "visitante") => {
  const nomeFinal = (!nome || !nome.trim()) ? "visitante" : nome.trim();
  console.log(`Olá doutor, ${nomeFinal}!`);
};

//Uso 
mensagem();
arrowFunctionNome('cleverson');
arrowFunctionSaudacao(nome);

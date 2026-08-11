const MENSAGEM_DE_ERRO_TIPO_DEVERIA_SER_NUMBER = "Favor digitar um número";

/* let nome1 = "João";
console.log(typeof nome1);

{
  console.log(nome1);
  let nome2 = "Victor";
  console.log(nome2);
}

console.log(nome1); */


let idade = 25;

if (typeof idade !== "number") {
    console.log(MENSAGEM_DE_ERRO_TIPO_DEVERIA_SER_NUMBER);
}


/* // exemplo igualdade branda e estrita
 let idadeStr = "25";


if (idade === idadeStr) {
    console.log("iguais!");
} else {
    console.log("diferentes!");
} */

let mensagem;

if (idade >= 18) {
    mensagem = "Acesso liberado";
} else {
    mensagem = "Acesso proibido para menores";
}

console.log(mensagem);

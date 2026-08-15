function media(nota1, nota2, nota3) {
  return (nota1 + nota2 + nota3) / 3;
}

console.log(media(7, 9, 10));

const calculaMedia = (nota1, nota2, nota3) => (nota1 + nota2 + nota3*2) / 4;

console.log(calculaMedia(7, 9, 10));
console.log(calculaMedia(6, 8, 9));
console.log(calculaMedia(10, 10, 3));
console.log(calculaMedia(8, 7, 9));
console.log(calculaMedia(6, 5, 0));


const precoOrig = 110; 
const desconto = 10; 

function calcPrecoFinal(preco, desconto) {
  let valorDesconto = 0;
  if (preco > 100 && desconto > 0) {
    valorDesconto = preco * (desconto / 100);;
  }
  return preco - valorDesconto;
}
console.log("Preço final "+calcPrecoFinal(precoOrig, desconto));

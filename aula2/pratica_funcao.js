/* Criar um programa que calcula o preço final de um produto com desconto.
Necessário:
Criar variáveis para preço original e percentual de desconto (Ex: valorTotal * 0.10 -> valor do desconto)
Criar uma função para calcular o desconto que retorna o valor final
Usar if-else para aplicar o desconto apenas para compras acima de 100 reais.
 */

const prompt = require("prompt-sync")();


function calcularDesconto(valor, percentual) {
    if (valor > 100) {
        let desconto = valor * percentual;
        return valor - desconto;
    } else {
        return valor;
    }
}

let valorTotal = Number(prompt("Digite o preço do produto: R$ "));
let percentualDesconto = Number(
    prompt("Digite o percentual de desconto (ex: 0.10): ")
);

let valorFinal = calcularDesconto(valorTotal, percentualDesconto);

console.log(`Valor final: R$ ${valorFinal.toFixed(2)}`);

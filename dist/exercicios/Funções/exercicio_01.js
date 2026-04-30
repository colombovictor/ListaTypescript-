// Crie uma função somarAte que recebe um número inteiro positivo.
// Use um laço de repetição para calcular a soma de todos os números de 1 até
// o número fornecido. (Ex: somarAte(4) deve retornar 10, pois 1+2+3+4 = 10).
export function exercicio_01() {
    let number = 0;
    let soma = 0;
    number = Number(prompt("Informe um número:"));
    function somarAte() {
        for (let i = 1; i < number + 1; i++) {
            soma = i + soma;
        }
        return soma;
    }
    somarAte();
    alert(soma);
}
const btn = document.getElementById("btn-f1");
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", exercicio_01);

// 3. Crie uma função que recebe um número (ex: 5) e em seguida utilize loops aninhados para
// desenhar um triângulo de asteriscos no console.
// Exemplo para entrada 3:
// *
// **
// ***
export function exercicio_03() {
    function gerar_Triangulo(numero) {
        for (let i = 0; i < numero; i++) {
            triangulo[i] = asterico[i];
            console.log(triangulo[i]);
            asterico[i + 1] = asterico[i] + asterico[i];
        }
    }
    let asterico = ['*'], triangulo = [], largura = 0, numero = 0;
    numero = Number(prompt(`Informe o tamanho do seu triangulo: `));
    gerar_Triangulo(numero);
}
const btn = document.getElementById("btn-f3");
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", exercicio_03);

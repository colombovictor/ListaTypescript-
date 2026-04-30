// Crie uma função que recebe um valor de saque (inteiro).
// A função deve dizer quantas notas de 50, 20 e 10 são necessárias para o saque
// (priorizando as maiores). Use um laço while para ir subtraindo do valor total.
export function exercicio_03() {
    let saque = 0;
    let cont50 = 0;
    let cont20 = 0;
    let cont10 = 0;
    saque = Number(prompt("Informe um valor para ser sacado"));
    function valor_saque(saque) {
        while (true) {
            if (saque >= 50) {
                cont50++;
                saque = saque - 50;
            }
            else if (saque >= 20) {
                cont20++;
                saque = saque - 20;
            }
            else if (saque >= 10) {
                saque = saque - 10;
                cont10++;
            }
            else {
                break;
            }
        }
        alert(`As quantidades de notas sacadas foi ` + cont50);
        alert(`As quantidades de ntas sacadas foi` + cont20);
        alert(`As quantidades de notas sacadas foi` + cont10);
    }
    valor_saque(saque);
}
const btn = document.getElementById("btn-f3");
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", exercicio_03);

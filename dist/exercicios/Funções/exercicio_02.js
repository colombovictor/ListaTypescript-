// O IF tem uma estufa e o professor de biologia quer um sistema simples para
// monitorar a temperatura.
// Crie uma função ler_temperatura():
// Simula a leitura de um sensor, pedindo ao usuário para digitar uma temperatura 
// (valor inteiro ou float).
// Retorna a temperatura lida.
// Crie uma função verificar_alerta_temperatura(temperatura):
// Recebe a temperatura.
// Se a temperatura for menor que 10 ou maior que 30, retorna True (alerta).
// Caso contrário, retorna False.
// Crie uma função emitir_mensagem_alerta(status_alerta):
// Recebe o status_alerta (True ou False).
// Se status_alerta for True, imprime "ALERTA: Temperatura fora da faixa ideal!".
// Se status_alerta for False, imprime "Temperatura dentro da faixa normal.".
export function exercicio_02() {
    let temperatura = 0;
    let status_alerta = true;
    function ler_temperatura() {
        temperatura = Number(prompt("Informe a temperatura"));
        return temperatura;
    }
    function verificar_alerta_temperatura(temperatura) {
        if (temperatura < 10 || temperatura > 30) {
            return status_alerta = true;
        }
        else {
            return status_alerta = false;
        }
    }
    function emitir_mensagem_alerta(status_alerta) {
        if (status_alerta == true) {
            alert("Temperatura fora da faixa ideal");
        }
        else {
            alert("temperatura dentro da faixa normal");
        }
    }
    ler_temperatura();
    verificar_alerta_temperatura(temperatura);
    emitir_mensagem_alerta(status_alerta);
}
const btn = document.getElementById("btn-f2");
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", exercicio_02);

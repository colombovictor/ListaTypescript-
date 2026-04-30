// Desenvolva a tabuada de um número usando for.
export function exercicio_02() {
    let numero = 5;
    for (let i = 0; i < 11; i++) {
        console.log(numero + " x " + i + " = " + numero * i);
        alert(numero + " x " + i + " = " + numero * i);
    }
}
const btn = document.getElementById("btn-3");
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", exercicio_02);

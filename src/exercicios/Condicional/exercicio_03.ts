// Crie um programa que solicite dois números e simule um menu de uma calculadora:
// 1 - Soma
// 2 - Subtração
// 3 - Multiplicação
// 4 - Divisão
// Use switch...Case
export function exercicio_03(): void {
  let numero1: number,
    numero2: number,
    resultado: number = 0;
  numero1 = Number(prompt("Informe o primeiro número:"));
  numero2 = Number(prompt("informe o segundo número:"));
  resultado = Number(
    prompt(`
        (1) - Soma
        (2) - Subtração 
        (3) - Multiplicação 
        (4) - Divisão`),);
  switch (resultado) {
    case 1:
      resultado = numero1 + numero2;
      console.log(resultado)
      window.alert(resultado)
      break;

    case 2:
      resultado = numero1 - numero2;
      console.log(resultado)
      window.alert(resultado)
      break;

    case 3:
      resultado = numero1 * numero2;
      console.log(resultado)
      window.alert(resultado)
      break;

    case 4:
      resultado = numero1 / numero2;
      console.log(resultado)
      window.alert(resultado)
      break;
  }
}

const btn = document.getElementById("btn-1.2");

btn?.addEventListener("click", exercicio_03);
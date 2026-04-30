// Ler dois valores e imprimir uma das três mensagens a seguir:
// ‘Números iguais’, caso os números sejam iguais;
// ‘Primeiro é maior’, caso o primeiro seja maior que o segundo;
// ‘Segundo maior’, caso o segundo seja maior que o primeiro.
export function exercicio_04(): void {
  let numero1: number, numero2: number;
  numero1 = Number(prompt("Digite o primeiro número:"));
  numero2 = Number(prompt("Informe o segundo número:"));

  if (numero1 === numero2) {
    window.alert("Números iguais");
    console.log("Números iguais");
   }
    if(numero1 > numero2) {
      window.alert("Primeiro é maior");
      console.log("Primeiro é maior");
    } else if (numero1 < numero2) {
      console.log("Segundo maior");
      window.alert("Segundo maior");
    }
  }

const btn = document.getElementById("btn-1.1");

btn?.addEventListener("click", exercicio_04);
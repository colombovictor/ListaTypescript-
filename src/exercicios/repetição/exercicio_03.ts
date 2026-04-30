// Faça um programa que leia nome, horas trabalhadas, salário-hora e sexo de um grupo de
// operários. Ao final de cada solicitação pergunte se o usuário quer continuar ou não o
// programa.
// Calcule e imprima:
// ● Salário total dos funcionários, o maior salário, juntamente com o nome de quem o
// recebeu;
// ● O número de funcionários do sexo masculino e feminino cadastrado;
// ● O percentual de funcionários homens e mulheres cadastrados.

export function exercicio_03(): void {
  let nome: string,
    horastrabalahadas: number = 0,
    salario_hora: number = 0,
    qtd_homens = 0,
    qtd_mulheres = 0,
    total_funcionarios = 0,
    continuar: number = 1,
    sexo: string,
    maiorsalario: number = 0,
    salario_total: number = 0,
    total_salarios: number = 0,
    nome_maior: string = "a",
    porcetagem_homens: number = 0,
    porcetagem_mulheres: number = 0

  while (continuar != 0) {
    nome = String(prompt("Informe seu nome"));
    horastrabalahadas = Number(prompt("Informe as horas trabalhadas"));
    salario_hora = Number(prompt("Informe o seu salário"));
    sexo = String(prompt("Informe o seu sexo"));
    sexo = sexo.toUpperCase();


    salario_total = horastrabalahadas * salario_hora;
    total_salarios = salario_total + total_salarios;

    if (salario_total > maiorsalario) {
      maiorsalario = salario_total;
      nome_maior = nome;
    }
    if (sexo == "M") {
      qtd_homens = qtd_homens + 1;
    } else if (sexo == "F") {
      qtd_mulheres = qtd_mulheres + 1;
    }
    total_funcionarios = total_funcionarios + 1;
    porcetagem_homens = (qtd_homens / total_funcionarios) * 100;
    porcetagem_mulheres = (qtd_mulheres / total_funcionarios) * 100;
 continuar = Number(prompt("Deseja continuar se não digte 0 se sim digite qualquer outro valor a escolhar é sua parceiro tomar no seu c#!"))
    
  console.log("O salário total dos funcionarios" + salario_total);
  window.alert("O salário total dos funcionarios" + salario_total);
  console.log("O maior salário é" + maiorsalario + nome_maior);
  window.alert("O maior salário é" + maiorsalario + nome_maior);
  console.log("O número total de funcionarios homens é" + qtd_homens);
  console.log("O número total de funcionarios homens é" + qtd_mulheres);
  console.log(
    "O número percentual de funcionarios homens é" + porcetagem_homens,
  );
  window.alert(
    "O número percentual de funcionarios homens é" + porcetagem_homens,
  );
  console.log(
    "O número percentual de funcionarios Mulheres é" + porcetagem_mulheres,
  );
  window.alert(
    "O número percentual de funcionarios Mulheres é" + porcetagem_mulheres,
  );
}
}

const btn = document.getElementById("btn");

btn?.addEventListener("click", exercicio_03);
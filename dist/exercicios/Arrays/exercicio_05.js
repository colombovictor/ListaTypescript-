// Organizador de Tarefas Diárias
// Você quer organizar suas tarefas de casa e da escola para não esquecer nada. 
// Crie uma função chamada gerenciar_tarefas() que não receba argumentos. 
// A função deve:
// Permitir que o usuário adicione tarefas a um vetor.
// Permitir que o usuário marque tarefas como concluídas (removendo-as da lista, por exemplo).
// Permitir que o usuário exiba todas as tarefas pendentes.
// Utilize um menu interativo com opções (adicionar, concluir, exibir, sair) 
// e um laço while para manter o programa rodando até o usuário escolher sair.
export function exercicio_05() {
    function gerenciar_tarefas() {
        while (opcao != 4) {
            opcao = Number(prompt(`Selecione a opção para a lista de tarefas: 
    [1] - Adicionar tarefa.
    [2] - Marcar como concluido
    [3] - Exibir tarefas
    [4] - Sair`));
            switch (opcao) {
                case 1:
                    lista_Tarefas[lista_Tarefas.length] = String(prompt(`Informe a tarefa que deseja adicionar: `));
                    break;
                case 2:
                    console.log(lista_Tarefas);
                    concluido = Number(prompt(`Informe a posição do item que deseja marcar como concluido: `));
                    lista_Tarefas.splice(concluido - 1, 1);
                    break;
                case 3:
                    console.log(lista_Tarefas);
                    break;
                case 4:
                    alert(`Encerrando o programa.`);
                    break;
            }
        }
    }
    let opcao = 0, lista_Tarefas = [], concluido = 0;
    lista_Tarefas[lista_Tarefas.length] = String(prompt(`Informe a tarefa que deseja cadastrar: `));
    gerenciar_tarefas();
}
const btn = document.getElementById("btn-b5");
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", exercicio_05);

let cores: Array<String | number> = ["Verde", "Azul", "Amarelo", 1];
// Insere um novo elemento ao final do array.

cores.push("Vermelho"); // Insere um novo elemento ao final do array.

cores.pop(); // remove ULTIMO ELEMENTO DA LISTA

cores.unshift("Roxo"); // Insere um novo elemento no inicio do array.
cores.shift(); // remove do incio do array
cores.reverse(); // Inverte  a ordem dos elementos
const cor =  cores.filter((c) => c == "Verde" )
alert(cor)

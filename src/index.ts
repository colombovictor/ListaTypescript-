import { exercicio_01 as nu } from "./exercicios/Condicional/exercicio_01.js";
import { exercicio_02 as nu1 } from "./exercicios/Condicional/exercicio_02.js";
import { exercicio_03 as nu2 } from "./exercicios/Condicional/exercicio_03.js";
import { exercicio_04 as nu3 } from "./exercicios/Condicional/exercicio_04.js";
import { exercicio_01 as na } from "./exercicios/repetição/exercicio_01.js";
import { exercicio_02 as nb } from "./exercicios/repetição/exercicio_02.js";
import { exercicio_03 as nc} from "./exercicios/repetição/exercicio_03.js";
import { exercicio_04 as nd } from "./exercicios/repetição/exercicio_04.js";
import { exercicio_01 } from "./exercicios/Funções/exercicio_01.js";
import { exercicio_02 } from "./exercicios/Funções/exercicio_02.js";
import { exercicio_04 } from "./exercicios/Funções/exercicio_04.js";
import { exercicio_05 } from "./exercicios/Funções/exercicio_05.js";
import { exercicio_07 } from "./exercicios/Funções/exercicio_07.js";
import { exercicio_08 } from "./exercicios/Funções/exercicio_08.js";
const exercicio: number = Number(prompt("Qual questão deseja rodar?"));
switch (exercicio) {
  case 1:
    nu();
    break;
  case 2:
    nu1();
    break;

  case 3:
    nu2();
    break;

  case 4:
    nu3();
    break;

  case 5:
    exercicio_01();
    break;

  case 6:
    exercicio_02();
    break;

  // case 7:
  //   exercicio_03();
  //   break;

  case 8:
    exercicio_04();
    break;
    
 case 9:
  exercicio_01();
  break;

  case 10:
    exercicio_02();
    break;
    

    case 11:
      exercicio_04();
      break;

      case 12:

      exercicio_05();
      break;
   
case 13:
  exercicio_07();
  break;

  case 14:
    exercicio_08();
    break;

}

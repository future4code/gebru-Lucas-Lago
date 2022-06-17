<<<<<<< HEAD
import { exercicio1 } from "./exercicio1";
import { exercicio2 } from "./exercicio2";
import { exercicio3 } from "./exercicio3";
import { exercicio4 } from "./exercicio4";
import { exercicio5 } from "./exercicio5";
import { exercicio6 } from "./exercicio6";

// exercicio1();
// exercicio2();
// exercicio3();
// exercicio4();
// exercicio5();
// exercicio6();
=======
// // Exercício 1
// function checaTriangulo(
//     a: number, 
//     b: number, 
//     c: number
//     ) {
//     if (a !== b && b !== c) {
//       return "Escaleno";
//     } else if (a === b && b === c) {
//       return "Equilátero";
//     } else {
//       return "Isósceles";
//     }
//   }



// // Exercício 2 
// const cor1 = prompt("Insira sua primeira cor favorita")
// const cor2 = prompt("Insira sua segunda cor favorita")
// const cor3 = prompt("Insira sua terceira cor favorita")

// function imprimeTresCoresFavoritas(
//     cor1: string,
//     cor2: string,
//     cor3: string
// ) :void {

//     console.log([cor1, cor2, cor3])
// }



//  // Exercício 3
// function checaAnoBissexto(
//     ano: number
//     ) :boolean {
//     const cond1: boolean = ano % 400 === 0
//     const cond2: boolean = (ano % 4 === 0) && (ano % 100 !== 0)
//     return cond1 || cond2
// }


//  // Exercício 4
// function comparaDoisNumeros(
//     num1: number,
//     num2: number
// ) :number {
//     let maiorNumero: number;
//     let menorNumero: number;
  
//     if (num1 > num2) {
//       maiorNumero = num1;
//       menorNumero = num2;
//     } else {
//       maiorNumero = num2;
//       menorNumero = num1;
//     }
  
//     const diferenca: number = maiorNumero - menorNumero;
  
//     return diferenca 
// }


// // Exercício 5
// function checaRenovacaoRG(
//     anoAtual: number, 
//     anoNascimento: number, 
//     anoEmissao: number
//     ) :string {

//     let idade: number = anoAtual - anoNascimento
//     let tempoCarteira: number = anoAtual - anoEmissao
   
//      if(idade <= 20 ) {
//          return tempoCarteira >= 5 ? "passou dos 5 anos precisa renovar" : "ainda não passou os 5 anos"
       
//       }else if(idade >= 20 || idade <= 50) {
//          return tempoCarteira >= 10 ? "passou dos 10 anos precisa renovar" : "ainda não passou os 10 anos"
       
//       }else if(idade > 50) {
//          return tempoCarteira >=15 ? "passou dos 15 anos precisa renovar" : "ainda não passou os 15 anos"
       
//        }else {
//            return "error"
//     }
// }


// // Desafios
// // Exercício 6
// function doisNumeros(
//     num1: number,
//     num2: number
// ) :void {

//     const soma: number = num1 + num2;
//     const subtracao: number = num1 + num2;
//     const multiplicacao: number = num1 * num2;

//     let maiorNumero: number;

//     num1 > num2 ? maiorNumero = num1 : maiorNumero = num2;

//     console.log(`Soma: ${soma}`);
//     console.log(`Subtracao: ${subtracao}`)
//     console.log(`Multiplicacao: ${multiplicacao}`)
//     console.log(`Maior Número: ${maiorNumero}`)
// }



// // Exercício 7
// function converterDNA() :string {

//     const DNA: string = 'ATTGCTGCGCATTAACGACGCGTA'

//     const trocaAdenina: string = DNA.replace('A', 'U')
//     const trocaTimina: string = trocaAdenina.replace('T', 'A')
//     const trocaCitosina: string = trocaTimina.replace('C', 'G')
//     const RNA: string = trocaCitosina.replace('G', 'C')

//     return RNA
// }



// // Exercício 8
// function inverterString(
//     palavra: string
// ) :void {

//     const array: string[]= palavra.split("");
//     const arrayReverse: string[] = array.reverse()
//     const stringReverse: string = arrayReverse.join()

//     console.log(`String reversa: ${stringReverse}`)
// }



// Exercício 9
function podeEstudar(
    idade: number,
    ensinoMedio: boolean,
    tempoDisponivel: number,
    curso: string
) :string {

    let maiorDeIdade: boolean = idade >= 18
    let integral: boolean = curso === 'integral'
    let noturno: boolean = curso === 'noturno'
    
    if(maiorDeIdade && ensinoMedio && tempoDisponivel > 40 && integral || noturno){
        return ('inscrição válida!')
    }else{
        return ('inscrição inválida"')
    }
}
>>>>>>> master

// Exercício 2.

const operador = process.argv[2];
const num1 = Number(process.argv[3]);
const num2 = Number(process.argv[4]);

switch(operador){
    case 'sum':
        console.log(`A soma é: ${num1 + num2}`)
    break
    case 'sub':
        console.log(`A subtração é: ${num1 - num2}`)
    break
    case 'mult':
        console.log(`A multiplicação é: ${num1 * num2}`)
    break
    case 'div':
        console.log(`A divisão é: ${num1 / num2}`)
    break
    default:
        console.log('Operador inválido')
}
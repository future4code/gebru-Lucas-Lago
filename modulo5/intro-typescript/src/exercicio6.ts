export function exercicio6(
    num1: number,
    num2: number
) :void {
    const soma: number = num1 + num2;
    const subtracao: number = num1 - num2;
    const multiplicacao: number = num1 * num2;

    let maiorNumero: number

    if(num1 > num2){
        maiorNumero = num1
    }else{
        maiorNumero = num2
    }

    console.log(`soma: ${soma}, subtração: ${subtracao}, multiplicação: ${multiplicacao}, maior número: ${maiorNumero}`)
}
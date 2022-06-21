export function exercicio5(
    anoAtual: number,
    anoNascimneto: number,
    anoEmissao: number
) : void {

    let idade: number = anoAtual - anoNascimneto
    let tempoCarteira: number = anoAtual - anoEmissao

    if(idade <= 20){
        tempoCarteira >= 5 ? "Passou dos 5 anos, precisa renovar " : "Ainda não passou os 5 anos"
    }else if(idade >= 20 || idade <= 50){
        tempoCarteira >= 10 ? "Passou dos 10 anos, precisa renovar" : "Ainda não passou os 10 anos"
    } else if(idade > 50){
        tempoCarteira>= 15 ? "Passou de 15 anos, precisa renovar" : "Ainda não passou os 15 anos"
    } else{
        "Error"
    }

}
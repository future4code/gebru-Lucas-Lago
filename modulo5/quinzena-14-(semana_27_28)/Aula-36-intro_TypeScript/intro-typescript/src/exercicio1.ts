
export function exercicio1(
    a: number,
    b: number,
    c: number
    ): void {

        if(a !== b && b !== c){
            console.log("Escaleno")
        }else if(a === b && b === c){
            console.log("Equilátero")
        }else{
            console.log("Isósceles")
        }
}
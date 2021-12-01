// // EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO
// // 1.
//     let valor = 0
//     for(let i = 0; i < 5; i++) {
//     valor += i
//     }
//     console.log(valor)

//     /*
//         RESPOSTA
//         Esta fazendo um loop que imprimi um valr que vai de i = 0 até i = 4
//         O código imprimi
//             0
//             1
//             2
//             3
//             4
//     */

// // 2.
//     const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
//     for (let numero of lista) {
//     if (numero > 18) {
// 		    console.log(numero)
// 	    }
//     }

//     /*
//         RESPOSTA
//         a. Imprimi os valores maiores que 18
//         b.
//     */

// // 3.
//     const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
//     let quantidadeAtual = 0
//     while(quantidadeAtual < quantidadeTotal){
//     let linha = ""
//     for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//         linha += "*"
//     }
//     console.log(linha)
//     quantidadeAtual++
//     }

//     /*
//         RESPOSTA
//         Ele imprimi 4 linhas vazias por vez, sendo que em cada linha ele adiciona
//         um asterisco a mais no console
//     */


// // EXERCÍCIOS DE ESCRITA DE CÓDIGO
// // 1.
//     const bichinhos = Number(prompt('Quantos bichinhos você tem?'))

//     //a.
//     if (bichinhos === 0){
//         console.log('Que pena! Você pode adotar um pet')
    
//     // b.
//     } else {
//         let arrayPets = []

//         for ( let i = 0; i < bichinhos; i++) {
//             const nomeDosPets = prompt('Digite o nome do pet')
//             arrayPets.push(nomeDosPets)
//         }
//     // c.
//     console.log(arrayPets)
//     }

// 2.
    const arrayOriginal = [2, 4, 6, 9, 10, 15, 20, 50, 90]
    let tamanho = arrayOriginal.length
    
    // // a.
    // function imprimirArray(){
    //     for (let i = 0; i < tamanho; i++){
    //         console.log(arrayOriginal[i])
    //     }
    // return imprimirArray
    // }
    // imprimirArray()

    // // b.
    // function imprimirArrayDividindo(){
    //     for (let i = 0; i < tamanho; i++){
    //         console.log(arrayOriginal[i]/10)
    //     }
    //     return imprimirArrayDividindo
    // }
    // imprimirArrayDividindo()

    // // c.
    //     function imprimirArrayPar(){
    //         const arrayPares = []
    //         for(let i = 0; i < tamanho; i++){
    //             if (arrayOriginal[i] % 2 === 0){
    //                 arrayPares.push(arrayOriginal[i])
    //             }
    //         }
    //     console.log(arrayPares)
    //     return arrayPares
    //     }
    //     imprimirArrayPar()

    // // d.
    //     function arrayStrings(){
    //         const novoArray = []

    //         for (let i = 0; i < tamanho; i++){
    //             console.log(`O elemento do índex ${i} é: ${arrayOriginal[i]}`)
    //             novoArray.push(arrayOriginal[i])
    //         }
    //     return novoArray
    //     }
    //     console.log(arrayStrings())

    // // e.

    //     function valorMaiorNumero(){
    //         let maiorNumero = 0
            
    //         for (let i = 0; i < tamanho; i++){
    //             const valor = arrayOriginal[i]
    //             if (valor > maiorNumero){
    //                 maiorNumero = valor
    //             }  
    //         }

    //     return maiorNumero
    //     }
    //     console.log(valorMaiorNumero(arrayOriginal))

    //     function valorMenorNumero(){
    //         let menorNumero = Infinity
    //         for (let i = 0; i < tamanho; i++){
    //             const valor = arrayOriginal[i]

    //             if (valor < menorNumero){
    //             menorNumero = valor
    //             }
    //         }
    //     return menorNumero
    //     }
    //     console.log(valorMenorNumero(arrayOriginal))
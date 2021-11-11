// //EXERCÍCIOS DE INTERPRETAÇÃO
// //1. 
//     const bool1 = true
//     const bool2 = false
//     const bool3 = !bool2

//     let resultado = bool1 && bool2
//     console.log("a. ", resultado)

//     resultado = bool1 && bool2 && bool3
//     console.log("b. ", resultado)

//     resultado = !resultado && (bool1 || bool2)
//     console.log("c. ", resultado)

//     console.log("d. ", typeof resultado)

//     /*
//         RESPOSTA

//         a. false
//         b. false
//         c. true
//         d. boolean

//     */

// // 2. 
//     let primeiroNumero = prompt("Digite um número: ")
//     let segundoNumero  = prompt("Digite outro número: ")

//     const soma = primeiroNumero + segundoNumero

//     console.log(soma)

//     /*
//         RESPOSTA

//         A soma que será impressa no console será a junção de ambos os números, pois a saída 
//         deles do let será uma String e não um number:
//         Ex.:
//         primeiroNumero = 5
//         segundoNumero  = 8
        
//         soma = 58 e não 13
//     */

// // 3.
//     //Usando o comando Number() consegue-se converter uma String em um Number, então ele 
//     //pode fazer o código do seguinte jeito:

//     let primeiroNumero = prompt("Digite um número: ")
//     let segundoNumero  = prompt("Digite outro número: ")

//     primeiroNumero = Number(primeiroNumero)
//     segundoNumero  = Number(segundoNumero)

//     const soma = primeiroNumero + segundoNumero

//     console.log(soma)


// //=========================================================================================
// //EXERCÍCIO DE ESCRITA DE CÓDIGO
// // 1.
//     let suaIdade = prompt("Digite sua idade:")
//     let idadeSeuAmigo = prompt("Digite a idade do seu melhor amigo:")

//     suaIdade = Number(suaIdade)
//     idadeSeuAmigo = Number(idadeSeuAmigo)

//     const diferenca = suaIdade - idadeSeuAmigo

//     console.log("Sua idade é maior que a do seu melhor amigo?", suaIdade > idadeSeuAmigo)
//     console.log("A diferença da dua idade para a do seu melhor amigo é: ", diferenca)

// // 2.
//     let numeroPar = prompt("Insira um número par:")
//     numeroPar = Number(numeroPar)

//     let resto = numeroPar % 2
//     console.log("O resto da divisão do seu número é:", resto)

//     /*
//         Sempre que o número for par, o resto será zero, já quando o número dor ímpar o 
//         resto será sempre 1.
//     */

// // 3.
//     const idade = prompt("Digite quantos anos você tem:")

//     let idadeMes = idade * 12
//     console.log("Você tem", idadeMes, "meses de vida")

//     let idadeDias = idade * 365
//     console.log("Você tem", idadeDias, "dias de vida")

//     let idadeHoras = idadeDias * 24
//     console.log("Você tem", idadeHoras, "horas de vida")

// // 4.
//     let numero1 = prompt('Digite o primeiro número:')
//     let numero2 = prompt('Digite o segundo número:')

//     let resto1 = numero1 % numero2
//     let resto2 = numero2 % numero1

//     console.log("O primeiro número é maior que o segundo?", numero1 > numero2)
//     console.log('O primeiro número é igual ao segundo?', numero1 === numero2)
//     console.log('O primeiro número é divisivel pelo segundo?', resto1 === 0 )
//     console.log('O segundo número é divisivel pelo primeiro?', resto2 === 0)


// //=========================================================================================
// //DESAFIO
// // 1.
//     /*
//     Graus Fahrenheit(°F) para Kelvin(K)
//     (KELVIN) = (GRAUS_FAHRENHEIT - 32)*(5/9) + 273.15
    
//     Graus Celsius(°C) para Graus Fahrenheit (°F)
//     (GRAUS_FAHRENHEIT) = (GRAUS_CELSIUS)*(9/5) + 32
//     */

//     let tempA = 77
//     let tempB = 80
//     let tempC = 30

//     tempA = Number(tempA)
//     tempB = Number(tempB)
//     tempC = Number(tempC)

//     tempA =  ((tempA - 32) * (5 / 9)) + 273,15
//     console.log("a. ", tempA, "K")

//     tempB = ((tempB) * (9 / 5)) + 32
//     console.log("b. ", tempB, "°F")

//     tempC = ((tempC) * (9 / 5)) + 32
//     console.log("c. ", tempC, "°F")
//     tempC = ((tempC - 32) * (5 / 9)) + 273,15
//     console.log("c. ", tempC, "K")

//     let temp1 = prompt('Digite a temperatura a ser convertida: ')
    
//     temp1 = Number(temp1)

//     temp1 = ((temp1) * (9 / 5)) + 32
//     console.log("d. ", temp1, "°F")
//     temp1 = ((temp1 - 32) * (5 / 9)) + 273,15
//     console.log("d. ", temp1, "K")

// // 2.
//     // Sabe-se que o quilowatt-hora de energia custa R$0.05

//     const energia = 280
//     const desconto = 0.15

//     let valorPago = energia * 0.05
//     console.log("O valor pago para um gasto de 280 KW/h é R$", valorPago)
    
//     let valorComDesconto = valorPago * (1 - desconto)
//     console.log('O valor com desconto a ser pago é R$', valorComDesconto)

// 3.
    //a
    const pesoLibra = 20
    let pesoKgA = 0.453592 * pesoLibra
    console.log('a. 20lb equivalem a', pesoKgA, 'Kg')

    //b
    const pesoOnca = 10.5
    let pesoKgB = 0.0283495 * pesoOnca
    console.log('b. 10,5oz equivalem a', pesoKgB, 'Kg')

    //c
    const comprimentoMilha = 100
    let comprimentoMetroC = 1609.34 * comprimentoMilha
    console.log('c. 100mi equivalem a', comprimentoMetroC, 'm')

    //d
    const comprimentoPes = 50
    let comprimentoMetroD = 0.3048 * comprimentoPes
    console.log('d. 100mi equivalem a', comprimentoMetroD, 'm')

    //e
    const quantidadeGal = 103.56
    let quantidadeLitrosE = 3.78541 * quantidadeGal
    console.log('e. 103.56gal equivalem a', quantidadeLitrosE, 'l')

    //f
    const quantidadeXic = 450
    let quantidadeLitrosF = 0.284131 * quantidadeXic
    console.log('f. 450xic equivalem a', quantidadeLitrosF, 'l')

    //g
    const quantidadeXicG = prompt('Digite quantas xicaras você quer converter em litros:')
    let quantidadeLitrosG = 0.284131 * quantidadeXicG
    console.log('f. 450xic equivalem a', quantidadeLitrosG1, 'l')
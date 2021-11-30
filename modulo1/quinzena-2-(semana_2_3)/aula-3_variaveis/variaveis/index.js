//Exercícios de interpretação
// 1.
        let a = 10
        let b = 10

        console.log(b)

        b = 5

        console.log(a, b)

        /*
            Resposta

            10

            10 5
        */

// 2.
        let a = 10
        let b = 20
        c = a
        b = c
        a = b

        console.log(a, b, c)

        /*
            RESPOSTA

            10  10  10

        */

// 3.
        let p = prompt("Quantas horas você trabalha por dia?")
        let t = prompt("Quanto você recebe por dia?")
        alert("Você recebe $(t/p) por hora")

        /*
            RESPOSTA

            Pede para o usuário informar quantas horas trabalha por dia e quanto ele recebe por dia, aloca em variáveis e imprime uma
            caixa informando quanto ele ganha por hora;
            Para melhor entendimento poderiamos substituir:
            p = horaTrabalhadas;
            t = recebePorDia;
        */

//EXERCÍCIO DE ESCRITA DE CÓDIGO

// 1.
        let nome
        let idade

        console.log(typeof nome)
        console.log(typeof idade)

        /*
            RESPOSTA    
            Como no comando const é uma constante, então é obrigado atribuir o valor as variáveis, como não atribui neste caso
            não aparecerá nada no console. O comando let não necessita de atribuição de variável, logo, consigo imprimir no
            console e ele retornará:
            
            UNDEFINED
            UNDEFINED
        */

        const nome = prompt("Qual seu nome?")
        let  idade = prompt("Qual sua idade?")
    
        console.log(typeof nome)
        console.log(typeof idade)
    
        /*
            RESPOSTA    
            Ele retornará como se ambos fossem String;
            
        */
        const nome = prompt("Qual seu nome?")
        let  idade = prompt("Qual sua idade?")
        
        console.log("Olá", nome, ", você tem", idade, "anos.")

// 2.
        let boolean1 = prompt("Você tomou café?")
        let boolean2 = prompt("Você acordou agora?")
        let boolean3 = prompt("Você bebeu água hoje?")

        console.log("Você tomou café? - ", boolean1)
        console.log("Você acordou agora? - ", boolean2)
        console.log("Você bebeu água hoje? - ", boolean3)

// 3.
        let a = 10
        let b = 25
        let c = null
        let d = null

       c = a
       d = b
        
        console.log("O novo valor de a é", d)
        console.log("O novo valor de b é", c)

// DESAFIO

        let numero1 = prompt("Digite o primeiro número:")
        let numero2 = prompt("Digite o segundo número: ")
        let x, y

        let numero11 = Number(numero1)
        let numero22 = Number(numero2)

        x = numero11 + numero22
        y = numero11 * numero22

        console.log(x, y)
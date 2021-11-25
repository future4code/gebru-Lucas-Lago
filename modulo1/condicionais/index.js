// //EXERCÍCIOS DE INTERPRETAÇÃO
// // 1.
//     const respostaDoUsuario = prompt("Digite o número que você quer testar")
//     const numero = Number(respostaDoUsuario)

//     if (numero % 2 === 0) {
//         console.log("Passou no teste.")
//     } else {
//         console.log("Não passou no teste.")
//     }

//     /* 
//         RESPOSTA
//         a. O código pede para o usuário digita um número e depois divide por 2
//         e compara seu resto com zero, se for zero ele imprimi "Passou no teste"
//         e se não for zero imprimi "Não passou no teste";

//         b. Imprimi "Passou no teste" para números pares;

//         c. Imprimi "Não passou no teste" para números ímpares;
//     */

// // 2.
//     let fruta = prompt("Escolha uma fruta")
//     let preco
//     switch (fruta) {
//         case "Laranja":
//             preco = 3.5
//         break;
//         case "Maçã":
//             preco = 2.25
//         break;
//         case "Uva":
//             preco = 0.30
//         break;
//         case "Pêra":
//             preco = 5.5
//         //break; // BREAK PARA O ITEM c.
//         default:
//             preco = 5
//         break;
//     }
//     console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

//     /*
//         RESPOSTA
//         a. Diz o preço da fruta conforme for escolhida pelo usuário;

//         b. Imprimi "O preço da fruta Maçã é R$ 2,25"

//         c. Ele não reconhece o case "Pêra" e imprimi o valor do default
//         "O preço da fruta Pêra é R$ 5"
//         */

// // 3.
//     const numero = Number(prompt("Digite o primeiro número."))

//     if(numero > 0) {
//         console.log("Esse número passou no teste")
// 	    let mensagem = "Essa mensagem é secreta!!!"
//     }

//     console.log(mensagem)

//     /*
//         RESPOSTA
//         a. A primeira linha pede para o usuário digitar um número e converte
//         ele de string para numero;

//         b. Para o número 10 ele imprimi "Esse número passou no teste". Já para 
//         o número -10 ele não vai imprimir nada;

//         c. Sim, haverá um erro dizendo que a variável mensagem não foi definida,
//         pois ela esta no escopo do if e ele pede pra imprimir no escopo global;
//     */



// EXERCÍCIOS DE ESCRITA DE CÓDIGO
// 1.
    // a.
        const nomeUsuario = prompt('Digite seu nome:')
        const idadeUsuario = prompt('Digite sua idade:')
    
    // b.
        const idadeUsuario1 = Number(idadeUsuario)

    // c.
        const idadeMinima = idadeUsuario1 >= 18
        if(idadeMinima){
            console.log(`Você pode dirigir, ${nomeUsuario}!`)
        } else {
            console.log(`Você não pode dirigir, ${nomeUsuario}!!`) 
        }

// 2.
    const periodoUsuario = prompt('Qual periodo você estuda? [M/V/N]')
    const periodo = periodoUsuario.toUpperCase()

    if(periodo === 'M'){
        console.log('Bom Dia!')
    } else if(periodo === 'V'){
        console.log('Boa Tarde!')
    } else if(periodo === 'N'){
        console.log('Boa Noite!')
    } else {
        console.log('Não entendi, digite novamente!')
    }

// 3.
    const periodoUsuario = prompt('Qual período você estuda? [M/V/N]')
    const periodo = periodoUsuario.toUpperCase()

    switch (periodo) {
        case 'M':
            console.log('Bom Dia!')
        break
        case 'V':
            console.log('Boa Tarde!')
        break
        case 'N':
            console.log('Boa Noite!')
        break
        default:
            console.log('Não entendi, digite novamente!')
        break
    }

// 4.
    const generoFilme = prompt('Qual o gênero do filme?')
    const precoIngresso = prompt('Qual o preço do ingresso?')

    const genero = generoFilme.toLowerCase()
    const preco = Number(precoIngresso)

    const condicao1 = genero === 'fantasia'
    const condicao2 = preco < 15
    
    const assistiremos = condicao1 && condicao2
    
    if(assistiremos){
        console.log('Bom filme!!')
    } else {
        console.log('Escolha outro filme :(')
    }

// DESAFIO
// 1.  
    const generoFilme = prompt('Qual o gênero do filme?')
    const precoIngresso = prompt('Qual o preço do ingresso?')
    const lanchinho = prompt('Qual lanchinho você vai comprar?')

    const genero = generoFilme.toLowerCase()
    const preco = Number(precoIngresso)

    const condicao1 = genero === 'fantasia'
    const condicao2 = preco < 15

    const assistiremos = condicao1 && condicao2

    if(assistiremos){
        console.log(`Bom filme, aproveite o(a) seu(sua) ${lanchinho}!!`)
    } else {
        console.log('Escolha outro filme :(')
    }

// 2.
    const nomeCompletoUsuario = prompt('Digite seu nome completo:')
    const tipoDeJogoUsuario = prompt('O jogo é internacional [IN] ou Doméstico [DO]?')
    const etapaDoJogoUsuario = prompt('O jogo é semi-final[SF], Decisão de terceiro lugar [DT] ou Final [FI]?')
    const categoriaUsuario = prompt('Qual a categoria [1/2/3 ou 4]?')
    const quantidadeDeIngressosUsuario = prompt('Qual a quantidade de ingressos?')

    //convertento string => number
    const quantidadeDeIngressos = Number(quantidadeDeIngressosUsuario)

// ===== VALOR DOS INGRESSOS =====
    let valorIngressoSF
    let valorIngressoDT
    let valorIngressoFI
    
    switch (categoriaUsuario){
        case '1':
            valorIngressoSF = 1320
            valorIngressoDT = 660
            valorIngressoFI = 1980
            break
        case '2':
            valorIngressoSF = 880
            valorIngressoDT = 440
            valorIngressoFI = 1320
            break
        case '3':
            valorIngressoSF = 550
            valorIngressoDT = 330
            valorIngressoFI = 880
            break
        case '4':
            valorIngressoSF = 220
            valorIngressoDT = 170
            valorIngressoFI = 330
    }

// ===== TIPO DE JOGO =====
    let tipoDeJogo
    const tipoDeJogoUsuarioTratado = tipoDeJogoUsuario.toUpperCase()

    if (tipoDeJogoUsuarioTratado === 'IN'){
        tipoDeJogo = 'Internacional'
    } else if (tipoDeJogoUsuarioTratado === 'DO'){
        tipoDeJogo = 'Nacional'
    } else {
        tipoDeJogo = 'Erro ao digitar!'
    }

// ===== ETAPAS DO JOGO E PREÇO DO INGRESSO =====
    let etapaDoJogo
    let precoIngresso

    const etapaDoJogoTratado = etapaDoJogoUsuario.toUpperCase()

    switch (etapaDoJogoTratado){
        case 'SF':
            etapaDoJogo = 'Semifinais'
            precoIngresso = valorIngressoSF
            break
        case 'DT':
            etapaDoJogo = 'Decisão do 3º lugar'
            precoIngresso = valorIngressoDT
            break
        case 'FI':
            etapaDoJogo = 'Final'
            precoIngresso = valorIngressoFI
            break
        default:
            etapaDoJogo = 'Erro ao digitar!'
    }
   
    // DECLARAÇÃO DO SIFRÃO
    let prefixo

        switch (tipoDeJogo){
            case 'Nacional':
                prefixo = 'R$'
                precoIngresso = precoIngresso
                valorTotal = precoIngresso * quantidadeDeIngressos
                break
            case 'Internacional':
                prefixo = '$'
                valorTotal = 4.1 * precoIngresso * quantidadeDeIngressos
                precoIngresso = 4.1 * precoIngresso
                break
        }

    console.log(`---Dados da compra---`)
    console.log(`Nome do cliente: ${nomeCompletoUsuario}`)
    console.log(`Tipo de jogo: ${tipoDeJogo}`)
    console.log(`Etapa do jogo: ${etapaDoJogo}`)
    console.log(`Categoria: ${categoriaUsuario}`)
    console.log(`Quantidade de ingressos: ${quantidadeDeIngressos} ingressos`)
    console.log(`--- Valores ---`)
    console.log(`Valor do ingresso: ${prefixo} ${precoIngresso}`)
    console.log(`Valor total ${prefixo} ${valorTotal}`)

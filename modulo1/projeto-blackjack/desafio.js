/**
//  * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
//  * 
//  * 
//     const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
//     console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
//     console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
//  * 
//  * 
//  * 
//  */

// Boas vindas
console.log('Boas vindxs ao jogo')

// Perguntando se quer iniciar o game
const iniciarOJogo = (iniciar) => {
   if (confirm('Bem vindx ao jogo de BlackJack! \nQuer iniciar uma rodada?')){
      iniciar()
   } else {
      alert('O jogo acabou!!')
   }
}

// Iniciando o game
const iniciarPartida = () => {

   let arrayTexto = []
   let arrayValor = []
   let arrayComputador
   let arrayComputadorValor
   let cartasUsuario
   let novaMaoUsuario = []
   let menorQue21
   let somaUsuario
   
   const distribuirCartas = (redistribuirCartas) => {
      
      // Gera 2 arrays que separa as cartas dos valores
      for (let i = 0; i < 52; i++){
         carta = comprarCarta()
         arrayTexto.push(carta.texto)
         Number(arrayValor.push(carta.valor))
      }
      // mostrar na tela os valores
      console.log(arrayTexto)             //pode tirar dps
      console.log(arrayValor)             //pode tirar dps

      // Reserva as cartas do computador
      arrayComputador = arrayTexto.splice(2, 2)
      arrayComputadorValor = arrayValor.splice(2, 2)
      console.log(arrayComputador)        //pode tirar dps
      console.log(arrayComputadorValor)   //pode tirar dps

      redistribuirCartas()
      return arrayValor, arrayTexto
   }

   // Se alguem sair com uma dupla de As, occorre o reembaralhamento das cartas
   const asesIguais = () => {
      
      const usuarioComParDeAses = arrayValor[0] === arrayValor[1] === 11
      const computadorComParDeAses = arrayComputadorValor[0] === arrayComputadorValor[1] === 11
      if(usuarioComParDeAses || computadorComParDeAses){
         alert('Apareceram 2 Ases')
      }
      console.log(arrayTexto)       //pode tirar dps
      console.log(arrayComputador)  //pode tirar dps
   }
   distribuirCartas(asesIguais)

   // Imprimir mais cartas
   const imprimirCartas = (maisCartas) => {        
   
      for (let i = 0; i < 52; i++){
         if (maisCartas()){
            i++
         } else {
            i = 0
         }
            cartasUsuario = (arrayValor.splice(i, 1))
            novaMaoUsuario.push(cartasUsuario)

         console.log(cartasUsuario)    //pode tirar dps
         console.log(novaMaoUsuario)   //pode tirar dps
      }

      // somar os números
      for (let i = 0; i < novaMaoUsuario.length; i++){
         
         somaUsuario += Number(novaMaoUsuario[i])
      }

      console.log(somaUsuario)      //pode tirar dps
      console.log(cartasUsuario)    //pode tirar dps
      console.log(novaMaoUsuario)   //pode tirar dps
   return novaMaoUsuario, somaUsuario
   }
   console.log(somaUsuario)      //pode tirar dps
   console.log(cartasUsuario)    //pode tirar dps
   console.log(novaMaoUsuario)   //pode tirar dps

   const condicaoComprarMaisCartas = (continuacaoDoGame) => {
      // comprarMaisUmaCarta = confirm(`Suas cartas são ${arrayTexto[0]} ${arrayTexto[1]}. A carta do computador é ${arrayComputador[0]}.\n\n Deseja comprar mais uma carta?`)
      if (comprarMaisUmaCarta = confirm(`Suas cartas são ${arrayTexto[0]} ${arrayTexto[1]}. A carta revelada do computador é ${arrayComputador[0]}.\nDeseja comprar mais uma carta?`) && menorQue21){
         return true
      } else {
         console.log('teste12345')  //pode tirar dps
      }
   }
   imprimirCartas(condicaoComprarMaisCartas)

   console.log(somaUsuario)      //pode tirar dps
   console.log(cartasUsuario)    //pode tirar dps
   console.log(novaMaoUsuario)   //pode tirar dps






}
iniciarOJogo(iniciarPartida)



// console.log(`Usuário - cartas ${carta1} ${carta2} - pontuação ${somaCartas}`)
// console.log(`Computador - cartas ${carta3} ${carta4} - pontuação ${somaCartas}`)








//    //Boas vindas ao jogo
//    console.log('Boas vindas ao jogo de Blackjack!')

//    // Pergunta se o jogador que iniciar uma nova rodada
//    if (!confirm('Bem vindx ao jogo de Blackjack do Coimbra \nQuer iniciar uma nova rodada?')){
//       alert('O jogo terminou!\nAté a próxima')
//    } else {
   
//       // Declaração de Variáveis necessárias para o código
//       let array = []
//       let arrayValor = []
//       let somaUsuario
//       let somaComputador

//       // Distribuição de cartas do Usuário
//       function distribuirCartas(callback){
//          for (let i = 0; i < 52; i++){
//             carta = comprarCarta()
//             array.push(carta.texto)
//             Number(arrayValor.push(carta.valor))
//          }
//          callback()
//          return arrayValor
//       }
      
//       // Caso apareça 1 par de As para alguém faz callback na função distribuirCartas()
//       const callback = () => {
//          if (arrayValor[0] === arrayValor[1] === 11 || arrayValor[2] === arrayValor[3] === 11){
//             alert('Apareceram 2 Ases!!')
//          }
//          console.log(array)
//       }
//       distribuirCartas(callback)
      
//       // Reserva das cartas do computador e ja sairam do array e arrayValor
//       const arrayComputador = array.splice(2, 2)
//       const arrayComputadorValor = arrayValor.splice(2, 2)

//       // Comprar Mais cartas?
//       const comprarMaisUmaCarta = (confirm(`Suas cartas são ${array[0]} ${array[1]}. A carta revelada do computador é ${array[2]}.`+'\n' + 'Deseja comprar mais uma carta?') && somaUsuario < 21)
      
//       // Soma das cartas
//       const somarCartas = () => {
//          if (comprarMaisUmaCarta){
//             somaUsuario = arrayValor
//             // console.log(somaUsuario)
//             confirm(`Suas cartas são ${array[0]} ${array[1]}. A carta revelada do computador é ${array[2]}.`+'\n' + 'Deseja comprar mais uma carta?')
//          }
//       return somaUsuario
//       }
//       somarCartas()
          
      
      
      
      
      
   
   
   
   
   
   
   
//    // Soma das cartas
//    //       somaUsuario = arrayValor[0] + arrayValor[1] + arrayValor[4]
//    //       somaComputador = arrayValor[2] + arrayValor[3]
     
//    //       // const arrayResultado = ['Empate!!', 'O Usuário Ganhou!!', 'O Computador Ganhou!!']

//    //       // const resultadoFinal = arrayResultado.filter((item, index, array) => {
//    //       //    return 
//    //       // })

//    //       const resultado = () => {

//    //          if (somaUsuario === somaComputador){
//    //             const empate = 'Empate!'
//    //          } else if (somaComputador < somaUsuario){
//    //             const usuarioGanhou = 'O usuário ganhou!'
//    //          } else {
//    //             const computadorGanhou = 'O computador ganhou!'
//    //          }
//    //          return resultado()
//    //       }
         
//    //       confirm(`Usuário - cartas ${array[0]} ${array[1]} ${array[4]} - pontuação ${somaUsuario}\n` +
//    //               `Computador - cartas ${array[2]} ${array[3]} - pontuação ${somaComputador} \n` +
//    //               `${resultado}`)

//    //    } else {   
//    //       // Soma das cartas
//    //       somaUsuario = arrayValor[0] + arrayValor[1]
//    //       somaComputador = arrayValor[2] + arrayValor[3]

//    //       // Imprimindo no console
//    //       confirm(`Usuário - cartas ${array[0]} ${array[1]} - pontuação ${somaUsuario}\n` +
//    //       `Computador - cartas ${array[2]} ${array[3]} - pontuação ${somaComputador} \n` +
//    //       `${resultado}`)
//    //    }
//    // }
//    }


// //=======================================================================

//    // console.log('Boas vindas ao jogo de Blackjack!')

//    // // Pergunta se o jogador que iniciar uma nova rodada
//    // if (!confirm('Quer iniciar uma nova rodada?')){
//    //    console.log('O jogo terminou!!')
//    // } else {
   
//    //    // Declaração de Variáveis necessárias para o código
//    //    // Usuário
//    //    let arrayUsuario = []
//    //    let arrayUsuarioValor = []
//    //    let somaUsuario

//    //    // Computador
//    //    let arrayComputador = []
//    //    let arrayComputadorValor = []
//    //    let somaComputador

//    //    // Distribuição de Cartas
//    //    function distribuirCartas(callback){
//    //       for (let i = 0; i < 52; i++){
//    //          carta = comprarCarta()
//    //          array.push(carta.texto)
//    //          Number(arrayValor.push(carta.valor))
//    //       }
//    //       callback()
//    //       return arrayValor
//    //    }
      
//    //    // Caso apareça 1 par de As para alguém faz callback na função distribuirCartas()
//    //    const callback = () => {
//    //       if (arrayValor[0] === arrayValor[1] === 11 || arrayValor[2] === arrayValor[3] === 11){
//    //          alert('Apareceram 2 Ases!!')
//    //       }
//    //       console.log(array)
//    //    }
//    //    distribuirCartas(callback)





//    //    // Soma das cartas
//    //    somaUsuario = arrayUsuarioValor[0] + arrayUsuarioValor[1]
//    //    somaComputador = arrayComputadorValor[0] + arrayComputadorValor[1]

//    //    // Imprimindo no console
//    //    // Usuário
//    //    console.log('===== Cartas Usuário =====')
//    //    console.log(`Usuário - cartas ${arrayUsuario[0]} ${arrayUsuario[1]} - pontuação ${somaUsuario}`)

//    //    // Computador
//    //    console.log('===== Cartas Computador =====')
//    //    console.log(`Computador - cartas ${arrayComputador[0]} ${arrayComputador[1]} - pontuação ${somaComputador}`)

//    //    console.log('====== RESULTADO ======')
   
//    //    if (somaUsuario === somaComputador){
//    //       console.log('Empate!')
//    //    } else if (somaComputador < somaUsuario){
//    //       console.log('O usuário ganhou!')
//    //    } else {
//    //       console.log('O computador ganhou!')
//    //    }
//    // }
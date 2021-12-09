/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
   //Boas vindas ao jogo
   console.log('Boas vindas ao jogo de Blackjack!')

   // Pergunta se o jogador que iniciar uma nova rodada
   if (!confirm('Quer iniciar uma nova rodada?')){
      console.log('O jogo terminou!!')
   } else {
   
      // Declaração de Variáveis necessárias para o código
      // Usuário
      let array = []
      let arrayValor = []
      let somaUsuario
      let somaComputador

      // Distribuição de cartas do Usuário
      const distribuirCartas = () => {
         for (let i = 0; i < 4; i++){
            carta = comprarCarta()
            array.push(carta.texto)
            Number(arrayValor.push(carta.valor))
         }
      }
      distribuirCartas()
   
      // Soma das cartas
      somaUsuario = arrayValor[0] + arrayValor[1]
      somaComputador = arrayValor[2] + arrayValor[3]

      // Imprimindo no console
      // Usuário
      console.log('===== Cartas Usuário =====')
      console.log(`Usuário - cartas ${array[0]} ${array[1]} - pontuação ${somaUsuario}`)

      // Computador
      console.log('===== Cartas Computador =====')
      console.log(`Computador - cartas ${array[2]} ${array[3]} - pontuação ${somaComputador}`)

      console.log('====== RESULTADO ======')
   
      if (somaUsuario === somaComputador){
         console.log('Empate!')
      } else if (somaComputador < somaUsuario){
         console.log('O usuário ganhou!')
      } else {
         console.log('O computador ganhou!')
      }
   }
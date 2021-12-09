// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   const tamanho = array.length
   return tamanho
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  const arrayReverso = array.reverse()
  return arrayReverso
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  function comparar(a, b){
    return a - b
  }
  const arrayEmOrdem = array.sort(comparar)
  return arrayEmOrdem
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  numeroPar = array.filter(pares => (pares % 2) === 0 )
  return numeroPar
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
  numerosPares = array.filter(paresElevado => (paresElevado % 2) === 0 )
  
  numerosParesElevado = numerosPares.map((numero) => {
    return Math.pow(numero, 2)
  }) 
  return numerosParesElevado
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  let maior = -Infinity
  for (let i = 0; i < array.length; i++){
    if (array[i] > maior){
      maior = array[i]
    }
  }
  return maior
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
  // objeto = {
  //   maiorNumero: ,
  //   maiorDivisivelPorMenor: ,
  //   diferenca: 
  // }  
  
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
  const equilatero = ladoA === ladoB === ladoC
  const isosceles = ladoA===ladoB!==ladoC || ladoA===ladoC!==ladoB || ladoB===ladoC!==ladoA
  const escaleno = ladoA !== ladoB !== ladoC
  
  if (equilatero){
    return "Equilátero"
  } else if (isosceles){
    return "Isósceles"
  } else if (escaleno){
    return "Escaleno"
  }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {

  // Função coloca o array em ordem crescente
  function colocarEmOrdem(a, b){
    return a - b
  }
  const arrayEmOrdem = array.sort(colocarEmOrdem)

  arrayEmOrdem.pop()
  arrayEmOrdem.shift()
  
  const arrayEmOrdemFinal =[]
  arrayEmOrdemFinal.push(arrayEmOrdem[0])
  arrayEmOrdem.reverse()
  arrayEmOrdemFinal.push(arrayEmOrdem[0])
  arrayEmOrdemFinal.reverse()
  return arrayEmOrdemFinal
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
  chamadoDoFilme = {
    nome: 'O Diabo Veste Prada',
    ano: 2006,
    diretor: 'David Frankel',
    elenco: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
  }
 return `Venha assistir ao filme ${chamadoDoFilme.nome}, de ${chamadoDoFilme.ano}, dirigido por ${chamadoDoFilme.diretor} e estrelado por ${chamadoDoFilme.elenco}.`
}
// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
  // objeto = {
  //   nome: "Astrodev",
  //   idade: 25,
  //   email: "astrodev@labenu.com.br",
  //   endereco: "Rua do Futuro, 4"
  // }

  objeto = {
    ...pessoa,
    nome: "ANÔNIMO"
  }
  return objeto
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}
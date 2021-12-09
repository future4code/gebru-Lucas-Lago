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
  const maiorNumero = Math.max(num1, num2)
  const menorNumero = Math.min(num1, num2)
  const diferenca = maiorNumero - menorNumero
  const divisivel = maiorNumero % menorNumero === 0

  objeto = {
    maiorNumero: maiorNumero,
    maiorDivisivelPorMenor: divisivel,
    diferenca: diferenca
  }
  return objeto
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
  const arrayPar = []

  for (let i = 0; arrayPar.length < n; i++){
    if (i % 2 === 0){
      arrayPar.push(i)
    }
  }
  return arrayPar
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
  const equilatero = ladoA === ladoB && ladoA === ladoC
  const isosceles = ladoA===ladoB || ladoA===ladoC || ladoB===ladoC
  
  if (equilatero){
    return "Equilátero"
  } else if (isosceles){
    return "Isósceles"
  } else {
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
  arrayEmOrdem.reverse()
  const tamanho = arrayEmOrdem.length - 1

  if (tamanho < 2){
    return arrayEmOrdem.reverse()
  } else {
    arrayEmOrdem.pop()
    arrayEmOrdem.shift()
    arrayEmOrdem.splice(1, arrayEmOrdem.length - 2)
  }
  return  arrayEmOrdem
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
  
 return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
}
// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
  objeto = {
    ...pessoa,
    nome: "ANÔNIMO"
  }
  return objeto
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
  
  const pessoasAutorizadas = pessoas.filter((item) => {
    const condicoes = item.idade > 14 && item.idade < 60 && item.altura > 1.5
    return condicoes

  })
  return pessoasAutorizadas
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
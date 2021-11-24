// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  
  const altura = prompt('Digite a altura:')
  const largura = prompt('Digite a largura:')

  console.log(altura * largura)

}

// EXERCÍCIO 02
function imprimeIdade() {
  
  const anoAtual = prompt('Digite o ano atual:')
  const anoDeNascimento = prompt('Digite seu ano de nascimento:')

  console.log(anoAtual - anoDeNascimento)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {

  let imc = peso / (altura * altura)

  return(imc)
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  
  const nome = prompt('Digite seu nome:')
  const idade = prompt('Digite sua idade:')
  const email = prompt('Digite seu email:')

  console.log('Meu nome é ' + nome + ', tenho ' + idade + ' anos, e o meu email é ' + email + '.')
  
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {

  const cor1 = prompt('Qual sua primeira cor favorita?')
  const cor2 = prompt('Qual sua segunda cor favorita?')
  const cor3 = prompt('Qual sua terceira cor favorita?')

  console.log([cor1, cor2, cor3])

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  
  string = string.toUpperCase()
  return string

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  
  quantidadeIngressos = custo / valorIngresso
  return quantidadeIngressos

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {

return (string1.length === string2.length)
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  
  return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  
  const tamanho = array.pop()
  return tamanho

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {

let copiaArray = array.slice()

copiaArray[0] = array[array.length - 1]
copiaArray[array.length - 1] = array[0]

return copiaArray

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  
  string1 = string1.toUpperCase()
  string2 = string2.toUpperCase()

  return (string1 === string2)  

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  
  const anoAtual = prompt('Qual o ano atual?')
  const anoDeNascimento = prompt('Qual o ano do seu nascimento?')
  const anoCNH = prompt('Qual ano sua carteira de identidade foi emitida?')

  const idade = anoAtual - anoDeNascimento
  const idadeCNH = anoAtual - anoCNH

  const boolean1 = idade <= 20 && idadeCNH >= 5
  const boolean2 = idade <= 50 && idadeCNH >= 10
  const boolean3 = idade >  50 && idadeCNH >= 15

  const resultado = boolean1 || boolean2 || boolean3
  console.log(resultado)
  
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  
  const resto1 = ano % 400
  const bissexto1 = resto1 === 0

  const resto2 = ano % 4
  const bissexto2 = resto2 === 0

  const resto3 = ano % 100
  const bissexto3 = resto3 === 0
  
  const resultado = bissexto1 || (bissexto2 && !bissexto3)
  return resultado

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  
  const maiorDeIdade = prompt('Você tem mais de 18 anos?')
  const ensinoMedioCompleto = prompt('Você possui ensino médio completo?')
  const disponibilidadeExclusiva = prompt('Vovê possui disponibilidade exclusiva durante os horários do curso?')

  const bool1 = maiorDeIdade === "sim"
  const bool2 = ensinoMedioCompleto === "sim"
  const bool3 = disponibilidadeExclusiva === "sim"

  const aprovado = bool1 && bool2 && bool3
  console.log(aprovado)

}
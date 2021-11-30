// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO
// 1. 
    function minhaFuncao(variavel) {
	    return variavel * 5
    }

    console.log(minhaFuncao(2))
    console.log(minhaFuncao(10))

    /*
        RESPOSTA
        a. Vai ser impresso a multiplicação de uma variável
        multiplicada por 5;

        b. 2 e 10 seriam subistituidos no lugar da variavel 
        na função, retornando 10 e 50 respectivamente;
        
    */

// 2.
    let textoDoUsuario = prompt("Insira um texto");

    const outraFuncao = function(texto) {
	    return texto.toLowerCase().includes("cenoura")
    }

    const resposta = outraFuncao(textoDoUsuario)
    console.log(resposta)

    /*
        RESPOSTA
        a. Esta função transforma o texto digitado pelo usuário
        em minúsculo e procura nele a palavra cenoura e 
        retorna true ou false;

        b. Para as entradas a seguir, tem-se as seguintes saídas:
        i.  Eu gosto de cenoura        
        ii.  CENOURA é bom pra vista
        iii. Cenouras crescem na terra

        i.      true;
        ii.     true;
        iii.    false;
    */

// EXERCÍCIOS DE ESCRITA DE CÓDIGO
// 1.
    //a. 
    const nome = prompt('Digite seu nome:')
    const idade = prompt('Digite sua idade:')
    const cidade = prompt('Digite sua cidade')
    const estudante = prompt('Você é estudante? [sim/não]')

        function frasePronta(){
            
            let frase = `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e ${estudante}, sou estudante`
            return frase
        }

    let frase = console.log(frasePronta())
     //b. 
        const nome = prompt('Digite seu nome:')
        const idade = prompt('Digite sua idade:')
        const cidade = prompt('Digite sua cidade')
        const profissao = prompt('Digite sua profissão:')

            function frasePronta(){
            
                let frase = `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}`
                return frase
            }

        let frase = console.log(frasePronta())

// 2.
    //a.
    function somar(numero1, numero2){

        const soma = numero1 + numero2
        return soma
    }

    console.log(somar(2, 5))

    //b.
    function maior(numero1, numero2){

        const boolean1 = numero1 > numero2
        return boolean1

    }
    console.log(maior(2, 5))

    //c. 
    function par(numero1){

        const boolean1 = numero1 % 2
        const boolean2 = boolean1 === 0
        return boolean2
    }
    console.log(par(5))
        
    //d.
    function palavra(string){

        const tamanho = string.length
        const minusculo = string.toLowerCase()

        const informacoes = `O tamanho da palavra é ${tamanho} e a palavra em minpusculo é ${minusculo}`
        return informacoes
    }
    let palavraFormatada = palavra('Teste')
    console.log(palavraFormatada)

//3.
    let numero1 = prompt('Digite o primeiro número:')
    let numero2 = prompt('Digite o segundo número:')
    numero1 = Number(numero1)
    numero2 = Number(numero2)

    function somar(){

        const soma = numero1 + numero2
        return soma
    }

    function subtracao (){

        const subtrair = numero1 - numero2
        return subtrair
    }
    function multiplicar (){

        const multiplicar1 = numero1 * numero2
        return multiplicar1
    }
    function dividir (){

        const divisao = numero1 / numero2
        return divisao
    }

console.log(`Números inseridos são ${numero1} e ${numero2}`)
console.log(`Soma: ${somar()}`)
console.log(`Diferença: ${subtracao()}`)
console.log(`Multiplicação: ${multiplicar()}`)
console.log(`Divisão: ${dividir()}`)


// DESAFIOS
// 1.
    //a.
        const somar = soma => {
            return soma
        } 
        console.log(somar())
    
    //b. 
        const somarValores = (valor1, valor2) => {
            
            valor1 = Number(valor1)
            valor2 = Number(valor2)
            const soma = valor1 + valor2
        }

// 2.
    const pitagoras = (hip, cateto1, cateto2) => {

        cateto1 = prompt('Digite um cateto:')
        cateto2 = prompt('Digite o outro cateto:')

        cateto1 = Number(cateto1)
        cateto2 = Number(cateto2)

        hip = Math.sqrt((cateto1*cateto1)+(cateto2*cateto2))
        return hip
    }
    console.log(pitagoras())
    

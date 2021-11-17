// Exercícios de interpretação de código
//1. 
    let array
    console.log('a. ', array)

    array = null
    console.log('b. ', array)

    array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    console.log('c. ', array.length)

    let i = 0
    console.log('d. ', array[i])

    array[i+1] = 19
    console.log('e. ', array)

    const valor = array[i+6]
    console.log('f. ', valor)

    /*
        RESPOSTA
        a. underfined
        b. null
        c. 11
        d. 3
        e. Array(11)
        f. 9

    */

// 2. 
    const frase = prompt("Digite uma frase")

    console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

    /*
        RESPOSTA

        SUBI NUM ÔNIBUS EM MIRROCOS
    */


//Exercício de escrita do código
// 1.
    const nomeDoUsuario = prompt('Qual seu nome?')
    const emailDoUsuario = prompt('Qual seu e-mail?')

    console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}!`)


3. 
    //a.
    const listaDeTarefas = []

    //b.
    const tarefa1 = prompt('Qual a primeira tarefa diária?')
    listaDeTarefas.push(tarefa1)

    const tarefa2 = prompt('Qual a segunda tarefa diária?')
    listaDeTarefas.push(tarefa2)

    const tarefa3 = prompt('Qual a terceira tarefa diária?')
    listaDeTarefas.push(tarefa3)

    //c.
    console.log(`Suas tarefas diárias são ${listaDeTarefas}`)

    //d. e. f.
    let tarefaConcluida = prompt('Qual tarefa foi concluida 1,2 ou 3?')
    listaDeTarefas.splice(tarefaConcluida - 1, 1)
    console.log(`Suas tarefas faltantes são ${listaDeTarefas}`)

// Desafio
// 1. 
    const fraseDigitada = prompt('Digite uma frase:')

    let array = fraseDigitada.split(' ', 99999)
    console.log(`O array é ${array}`)
// 2.
    const array = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]

    const indice = array.indexOf('Abacaxi')
    console.log(`O índice do Abacaxi corresponde a ${indice}`)
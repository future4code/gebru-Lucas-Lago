// //EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO
// // 1.
//     const filme = {
// 	    nome: "Auto da Compadecida", 
// 	    ano: 2000, 
// 	    elenco: [
// 		    "Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
// 		    "Virginia Cavendish"
// 		    ], 
// 	    transmissoesHoje: [
// 		    {canal: "Telecine", horario: "21h"}, 
// 		    {canal: "Canal Brasil", horario: "19h"}, 
// 		    {canal: "Globo", horario: "14h"}
// 		    ]
//     }

//     console.log(filme.elenco[0])
//     console.log(filme.elenco[filme.elenco.length - 1])
//     console.log(filme.transmissoesHoje[2])

//     /*
//         RESPOSTA
//         a.
//         Matheus Nachtergaele
//         Virginia Cavendish
//         Ele imprime o 3 array {canal: "Globo", horatio: "14"}
//     */

// // 2.
//     const cachorro = {
// 	    nome: "Juca", 
// 	    idade: 3, 
// 	    raca: "SRD"
//     }

//     const gato = {...cachorro, nome: "Juba"}

//     const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

//     console.log(cachorro)
//     console.log(gato)
//     console.log(tartaruga)

//     /*
//         RESPOSTA
//         a.  nome: "Juca", idade: 3, raca: "SRD"
//             nome: "Juba", idade: 3, raca: "SRD"
//             nome: "Jubo", idade: 3, raca: "SRD"
//         b. Ele salva o objeto anteriomente mensionado e acrescenta nele os próximos dados;
//     */

// // 3.
//     function minhaFuncao(objeto, propriedade) {
// 	    return objeto[propriedade]
//     }

//     const pessoa = {
//     nome: "Caio", 
//     idade: 23, 
//     backender: false
//     }

//     console.log(minhaFuncao(pessoa, "backender"))
//     console.log(minhaFuncao(pessoa, "altura"))

//     /*
//         RESPOSTA
//         a.  false
//             undefined
//         b. Imprimiu undefined, pois o parâmetro altura não esta definida no objeto;
//     */


// // EXERCÍCIOS DE ESCRITA DE CÓDIGO
// // 1.
//     // a.
//     const pessoa = {
//         nome: 'Lucas Coimbra',
//         apelidos: ['Lu', 'Lulu', 'Coimbrinha']
//     }
//     console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}`)

//     // b.
//     const pessoaNova = {
//         ...pessoa,
//         apelidosNovos: ['Luquinhas', 'Lucão', 'Lua']        
//     }
//     console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoaNova.apelidosNovos[0]}, ${pessoaNova.apelidosNovos[1]} ou ${pessoaNova.apelidosNovos[2]}`)

// // 2.
//     const objeto1 = {
//         nome:      'Scheilla',
//         idade:     24,
//         profissao: 'Estudante'
//     }

//     const objeto2 = {
//         nome:      'Lucas',
//         idade:     24,
//         profissao: 'Estudante'
//     }

//     function retorno1 (objeto1, objeto2){
//         const nome1 = [[objeto1.nome, objeto1.nome.length, objeto1.idade, objeto1.profissao, objeto1.profissao.length],[objeto2.nome, objeto2.nome.length, objeto2.idade, objeto2.profissao, objeto2.profissao.length]]
//         return nome1
//     }
//     console.log(retorno1(objeto1, objeto2))

    // function retorno2 (){
    //     const nome2 = [objeto2.nome, objeto2.nome.length, objeto2.idade, objeto2.profissao, objeto2.profissao.length]
    //     return nome2
    // }
    // console.log(retorno2())

// // 3.
//     // a.
//         const carrinho = []
//     // b.
//         const sacolao1 = {
//             nome: 'Melancia', 
//             Disponibilidade: true
//         }
//         const sacolao2 = {
//             nome: 'Kiwi', 
//             Disponibilidade: true
//         }
//         const sacolao3 = {
//             nome: 'Abacate', 
//             Disponibilidade: true
//         }
//     // c.
//         function comprar (fruta) {
//             carrinho.push(fruta)
//         }
//     // d.
//         comprar(sacolao1)
//         comprar(sacolao2)
//         comprar(sacolao3)
//         console.log(carrinho)



// DESAFIO
// // 1.
//         function dados(){
//             const nome = prompt("Digite seu nome:")
//             const idade = prompt('Digite sua idade:')
//             const profissao = prompt('Digite sua profissão:')

//             const dadosImpressos = {
//                 nome: nome,
//                 idade: idade,
//                 profissao: profissao
//             }
//             return dados
//         }


        
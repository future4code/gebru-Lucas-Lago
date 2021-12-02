// // EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO
// // 1.
//     const usuarios = [
//         { nome: "Amanda Rangel", apelido: "Mandi" },
//         { nome: "Laís Petra", apelido: "Laura" },
//         { nome: "Letícia Chijo", apelido: "Chijo" }
//     ]
  
//     const novoArrayA = usuarios.map((item, index, array) => {
//         console.log(item, index, array)
//     })

//     /*
//         RESPOSTA
//         a. O comando map() percorre o objeto usuarios e imprimi cada array
//         do objeto usuarios, imprimi algo neste estilo;
//         array(1) nome: "Amanda Rangel, apelido: "Mandi"
//         array(2) nome: "Laís Petra", apelido: "Laura" 
//         array(3) nome: "Letícia Chijo", apelido: "Chijo"
//     */

// // 2.
//     const usuarios = [
//         { nome: "Amanda Rangel", apelido: "Mandi" },
//         { nome: "Laís Petra", apelido: "Laura" },
//         { nome: "Letícia Chijo", apelido: "Chijo" },
//     ]
  
//     const novoArrayB = usuarios.map((item, index, array) => {
//         return item.nome
//     })
  
//     console.log(novoArrayB)
    
//     /*
//         RESPOSTA
//         a. Ele percorre o objeto com a função map() e imprimi os nomes dos
//         arrays, imprimi algo neste estilo;
//         array(1) nome: "Amanda Rangel"
//         array(2) nome: "Laís Petra"
//         array(3) nome: "Letícia Chijo"
//     */

// // 3.
//     const usuarios = [
//         { nome: "Amanda Rangel", apelido: "Mandi" },
//         { nome: "Laís Petra", apelido: "Laura" },
//         { nome: "Letícia Chijo", apelido: "Chijo" },
//     ]
  
//     const novoArrayC = usuarios.filter((item, index, array) => {
//         return item.apelido !== "Chijo"
//     })
  
//     console.log(novoArrayC)

//     /*
//         RESPOSTA
//         a. filter() percorre o obejto usuarios e procura nos apelidos 
//         aquele que não contem "Chijo" imprimindo este arrays, imprimi 
//         algo do tipo;
//         { nome: "Amanda Rangel", apelido: "Mandi" }
//         { nome: "Laís Petra", apelido: "Laura" }

//     */

// EXERCÍCIOS DE ESCRITA DE CÓDIGO
// // 1.
//     const pets = [
//         { nome: "Lupin", raca: "Salsicha"},
//         { nome: "Polly", raca: "Lhasa Apso"},
//         { nome: "Madame", raca: "Poodle"},
//         { nome: "Quentinho", raca: "Salsicha"},
//         { nome: "Fluffy", raca: "Poodle"},
//         { nome: "Caramelo", raca: "Vira-lata"},
//     ]

//     // a.
//     const arrayNomePets = pets.map((item, index, array) => {
//         return item.nome
//     })
//     console.log(arrayNomePets)

//     // b.
//     const arrayRacaSalsicha = pets.filter((item, index, array) => {
//         return item.raca === "Salsicha"
//     })
//     console.log(arrayRacaSalsicha)

//     // c.
//     const arrayCupomPoodle = pets.filter((item, index, array) => {
//         if(item.raca === "Poodle"){
//             console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}`)
//         }
//     })

// // 2.
//     const produtos = [
//         { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
//         { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
//         { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
//         { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
//         { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
//         { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
//         { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
//         { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
//         { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
//         { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
//     ]

    // // a.
    // const arrayNomeProdutos = produtos.map((item, index, array) => {
    //     return item.nome
    // })
    // console.log(arrayNomeProdutos)

    // // b.
    // const arrayNovosPrecos = produtos.map((item, index, array) => {
    //     return {nome: item.nome, categoria: item.categoria, preco: (item.preco*0.95).toFixed(2)}
    // })
    // console.log(arrayNovosPrecos)

    // // c.
    // const arrayBebidas = produtos.filter((item, index, array) => {
    //     return item.categoria === "Bebidas"
    // })
    // console.log(arrayBebidas)

    // // d.
    // const arrayNovosYpe = produtos.filter((item, index, array) => {
    //     return item.nome.includes('Ypê')
    // })
    // console.log(arrayNovosYpe)

    // // e.
    // const arrayNovosYpeFrase = arrayNovosYpe.map((item, index, array) => {
    //     return `Compre ${item.nome} por ${item.preco}`
    // })
    // console.log(arrayNovosYpeFrase)


// DESAFIO
// 1.
    const pokemons = [
        { nome: "Bulbasaur", tipo: "grama" },
        { nome: "Bellsprout", tipo: "grama" },
        { nome: "Charmander", tipo: "fogo" },
        { nome: "Vulpix", tipo: "fogo" },
        { nome: "Squirtle", tipo: "água" },
        { nome: "Psyduck", tipo: "água" },
    ]

    // a.
    // const arrayNomeOrdem = pokemons.map((item, index, array) => {
    //     return item.nome
    // })
    // console.log(arrayNomeOrdem.sort())

    // b.
    const arraySemRepeticoes = pokemons.filter((item, index, array) => {
        return pokemons.indexOf(item) === index
        })
    console.log(arraySemRepeticoes)
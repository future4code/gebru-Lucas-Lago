// EXERCÍCIO 1 
    // a. Utilizamos o comando process.argv[i], sendo que i tem que ser maior ou igual a 2 (2, 3, 4 ...). 
    // Lembrando que os valores de i = 1 é reservado ao node e i =2 é reservado ao arquivo index.js!
    
    // b.
        // const nome = process.argv[2]
        // const idade = process.argv[3]

        // if(nome == undefined || idade == undefined){
        //     console.log( "\x1b[31m", `Esperava 2 parâmetros, mas só recebi um!`)
        // }else{
        //     console.log("\x1b[32m", `Olá, ${nome}! Você tem ${idade} anos.`)
        // }

    // c.
        // const nome = process.argv[2]
        // const idade = process.argv[3]
        // const novaIdade = Number(idade) + 7

        // if(nome == undefined || idade == undefined){
        //     console.log( "\x1b[31m", `Esperava 2 parâmetros, mas só recebi um!`)
        // }else{
        //     console.log("\x1b[32m", `Olá, ${nome}! Você tem ${idade}. Em sete anos você terá ${novaIdade}`)
        // }
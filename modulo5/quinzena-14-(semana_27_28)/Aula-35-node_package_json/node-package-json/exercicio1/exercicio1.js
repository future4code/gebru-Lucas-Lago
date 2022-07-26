// Exercício 1.
// a)
    // Pode utilizar o process.argv[2] para fazer a requisição de dados pelo terminal do vscode. Lembrando que, 
    // process.argv[0] e process.argv[1] são reservados ao sistema.

// b)
    const nome = process.argv[2]
    const idade = Number(process.argv[3])

    console.log(`Olá, ${nome}! Você tem ${idade} anos`)

// c) 
    const idadeMaisSete = idade + 7

    console.log(`Olá, ${nome}! Você tem ${idade} anos. Em 7 anos você terá ${idadeMaisSete} anos.`)
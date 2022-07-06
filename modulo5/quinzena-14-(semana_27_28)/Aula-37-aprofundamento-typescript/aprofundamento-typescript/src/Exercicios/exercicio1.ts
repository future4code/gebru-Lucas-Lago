// Exercício 1
// a)
    // let minhaString: string = 'minha string'
    // minhaString = 21

    // O typeScript força o código a dar erro, não sendo possível reatribuir 
    // outro tipo para uma variável já declarada.

// b) 
    // let meuNumero: number = 10
    // meuNumero = 'string'

    // Não é possível reatribuir uma variável de outro tipo para uma 
    // variável que já possui algum tipo. Pode atribuir mais de algum 
    // tipo para uma variável utilizando o operador lógico | (ou).

// c)
    // type person1 = {
    //     nome: string,
    //     idade: number,
    //     corFavorita: arcoIris
    // }
    // type person2 = {
    //     nome: string,
    //     idade: number,
    //     corFavorita: arcoIris
    // }
    // type person3 = {
    //     nome: string,
    //     idade: number,
    //     corFavorita: arcoIris
    // }

    // type pessoa = person1 & person2 & person3

    // enum arcoIris {
    //     VERMELHO = 'VERMELHO',
    //     LARANJA = 'LARANJA',
    //     AMARELO = 'AMARELO',
    //     VERDE = 'VERDE',
    //     AZUL = 'AZUL',
    //     ANIL = 'ANIL',
    //     VIOLETA = 'VIOLETA'
    // }
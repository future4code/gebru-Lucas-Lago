// Exercício 1

export function frase(
    nome: string,
    data: string
) :void {

    const arrayData: string[] = data.split("/")
    return console.log(`Olá, me chamo ${nome}, nasci no dia ${arrayData[0]} do mês de ${arrayData[1]} do ano de ${arrayData[2]}`)

}
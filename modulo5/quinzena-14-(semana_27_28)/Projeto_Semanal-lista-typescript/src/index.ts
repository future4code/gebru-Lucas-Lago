
// Exercício 1

function frase(
    nome: string,
    data: string
) :string {

    const separador: any = /\s*;\s*/

    const arrayData: string[] = data.split(separador)

    return console.log(`Olá, me chamo ${nome}, nasci no dia ${arrayData[0]} do mês de ${arrayData[1]} do ano de ${arrayData[2]}`)
}
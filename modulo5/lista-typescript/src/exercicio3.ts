// Exercício 3

type catalogos = {
    nome: string,
    anoLancamento: number,
    genero: GENERO
}

enum GENERO {
    ACAO = "ação",
    DRAMA = "drama",
    COMEDIA = "comédia",
    ROMANCE = "romance",
    TERROR = "terror"
}

type informacaoOpcional = {
    pontuacao?: number
}

type catalogosFilmesCompleto= {
    catalogoFilme: catalogos & informacaoOpcional
}

export function catalogoFilmes(
    catalogosFilmesCompleto: catalogos & catalogosFilmesCompleto
    
) :void {

    return console.log(typeof(catalogosFilmesCompleto))
}
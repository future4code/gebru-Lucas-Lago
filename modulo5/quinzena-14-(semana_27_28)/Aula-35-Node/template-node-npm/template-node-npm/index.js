// process.argv[0] : Retorna o Caminho do Node!
// process.argv[1] : Retorna o Caminho do arquivo que estou pedindo para rodar!
// process.argv[2 ...] : indice 2 em diante são as variáveis disponíveis!

// const nome = process.argv[2]

// console.log(`Hello ${nome}`)

// const num1 = Number(process.argv[3])
// const num2 = Number(process.argv[4])

// console.log(`A soma dos números é ${num1 + num2}`)
// console.log("bom dia")
// console.log("bom tarde")
// console.log("bom noite")

import { countries } from "./countries.js"

const string = process.argv[2].toLowerCase()
const resultado = countries.filter(pais => pais.name.toLowerCase().includes(string))

console.table(resultado)
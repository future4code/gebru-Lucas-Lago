```function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  const elementos = arrayDeNumeros.filter(x => x === numeroEscolhido).length
  if (elementos > 0){
    return `O número ${numeroEscolhido} aparece ${elementos}x`
  } else {
    return 'Número não encontrado'
  }
}
```
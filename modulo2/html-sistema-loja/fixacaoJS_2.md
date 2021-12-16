//Exercício de fixação JS
```
function calculaPrecoTotal(quantidade) {
  
  let precoMaca
  
  if (quantidade < 12){
    precoMaca = 1.30
  } else if (quantidade >= 12){
    precoMaca = 1.00
  }
  
  let valorDaCompra
  valorDaCompra = quantidade * precoMaca
  return valorDaCompra
}
```
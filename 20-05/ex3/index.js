function calculaCompra(qtdMacas) {
  const precoNormal = 1.3
  const precoDesconto = 1
  const totalCompra = qtdMacas >= 12 ? (qtdMacas * precoDesconto) : (qtdMacas * precoNormal)

  return `R$ ${totalCompra.toFixed(2).replace('.', ',')}`
}

console.log(calculaCompra(11))

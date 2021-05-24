function calculaVotos(total, brancos, nulos, validos) {
  const votosBrancos = (brancos / total) * 100
  const votosNulos = (nulos / total) * 100
  const votosValidos = (validos / total) * 100

  return {votosBrancos: `${votosBrancos}%`, votosNulos: `${votosNulos}%`, votosValidos: `${votosValidos}%`}
}

calculaVotos(100, 2, 5, 93)
calculaVotos(200, 2, 5, 93)
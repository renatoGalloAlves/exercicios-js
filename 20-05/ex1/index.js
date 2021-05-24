function converteIdade (anos, meses, dias) {
  const currentDate = new Date()
  const qtosAnos = anos * 12 * 30
  const qtosMeses = meses * 30
  const qtosDias = dias

  return qtosAnos + qtosMeses + qtosDias
}

converteIdade(31, 8, 24)
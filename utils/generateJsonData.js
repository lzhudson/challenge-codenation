function generateJsonData(numeroDeCasas, token, cifrado, decifrado, resumoCriptografico) {
  return {
    numero_casas: numeroDeCasas,
    token, 
    cifrado, 
    decifrado, 
    resumo_criptografico: resumoCriptografico
  }
}
module.exports = {
  generateJsonData
}

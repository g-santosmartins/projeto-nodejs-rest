const fs = require('fs')
const path = require('path')
module.exports = (caminho, nomeDoArquivo, callbackImagemCriada) => {

  const tiposValidos = ['jpg', 'png', 'jpeg']
  const tipo = path.extname(caminho)

  const validaTipo = tiposValidos.indexOf(tipo.substring(1)) !== -1

  if (validaTipo) {
    const novoCaminho = `./assets/imagens/${nomeDoArquivo}${tipo}`
    fs.createReadStream(caminho)
      .pipe(fs.createWriteStream(novoCaminho))
      .on('finish', () => callbackImagemCriada(false, novoCaminho))

  } else {

    const erro = "Tipo é inválido"
    console.log('Tipo inválido') 
    callbackImagemCriada(erro)

  }
}


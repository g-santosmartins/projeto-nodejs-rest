const customExpress = require('./config/customExpress')

const conexao = require('./infraestrutura/database/conexao')

const Tabelas = require('./infraestrutura/database/tabelas')

//conexao banco de dados:
conexao.connect((erro) => {
  if(erro) {
    console.log(erro)
  } else {
    console.log('Deu certo! :D, estamos dentro do banco')
    
    Tabelas.init(conexao)
    const app = customExpress()
    app.listen('3000', () => {console.log('Servidor escutando na porta 3000')})

  }
  
})


//sem criar rota devolve o cannot get


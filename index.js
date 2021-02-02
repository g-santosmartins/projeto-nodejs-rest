const customExpress = require('./config/customExpress')
//sem criar rota devolve o cannot get
const app = customExpress()
app.listen('3000', () => {console.log('Servidor escutando na porta 3000')})


// npm install express
// npm --save-dev install nodemon
// npm install consign
// npm install body-parser
// npm install mysql
// comando para iniciar a aplicação == npm start
// Testar POST (Tem que abrir o CMD do Windowns) -> curl -d "nome=Bruno" http://localhost:3000/despesas



const customExpress = require("./config/customExpress")
const conexao = require('./infra/connection')
const tabela = require('./infra/tabelas')


conexao.connect(erro =>{

    if(erro){
        console.log("Erro ao conectar com o Database" + erro)
    }else{

        const app = customExpress()
        app.listen(3000, () => console.log ('Tudo nos conformes!'))
    }
})



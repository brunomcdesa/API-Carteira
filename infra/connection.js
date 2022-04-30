const mysql = require('mysql')

// CRIACAO DE CONEXAO COM BANCO DE DADOS
const conexao = mysql.createConnection({

    host:"localhost",
    user:"root",
    password:"",
    port:3306,
    database:"apicarteira"
})

module.exports = conexao
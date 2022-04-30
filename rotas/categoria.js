
module.exports = app =>{
    // ROTAS PARA CATEGORIA
    app.get('/categoria', (req,res) => res.send('Você está em /categoria via GET') )
    app.post('/categoria', (req,res) => {
        if((req.body.nome=!'Combustivel') || (req.body.nome=!'Eletrodomesticos') || (req.body.nome=!'Aluguel') ){
            res.send("Nome não é válido")
            console.log('Nome não é válido');
        }else{
            console.log(req.body)
            res.send('Você esta a esta CATEGORIA via POST')
        }
        
    })
}

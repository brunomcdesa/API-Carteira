

module.exports = app => {
    // ROTAS PARA LANCAMENTO
    app.get('/lancamento', (req,res) => res.send('Você está em /lancamento via GET') )
    app.post('/lancamento', (req,res) => {
        if(req.body.valor>2500){
            console.log('valor muito alto , ECONOMIZE');
            res.send('valor muito alto , ECONOMIZE')
        }else{
            console.log(req.body)
            res.send('Você esta a esta LANCAMENTO via POST')
        }
        
    })
}


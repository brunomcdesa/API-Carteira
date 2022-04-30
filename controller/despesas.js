

        //CRIAÇÃO DE ROTAS
module.exports = app => {

    //ROTAS PARA DESPESAS  ----  http://localhost:3000/despesas     
    app.get('/despesas', (req,res) => res.send('Você está em /despesas via GET') )
    app.post('/despesas', (req,res) => {
        console.log(req.body)
        res.send('Você esta a esta DESPESAS via POST')
    }
    )
    
    //ROTAS PARA CARTEIRA --- http://localhost:3000/carteira
    app.get('/carteira', (req,res) => res.send('Você está em /carteira via GET') )
    app.post('/carteira', (req,res) => {
        console.log(req.body)
        res.send('Você esta a esta CARTEIRA via POST')
    }
    )
    
    //ROTAS PARA CATEGORIA ---- http://localhost:3000/categoria
    app.get('/categoria', (req,res) => res.send('Você está em /categoria via GET') )
    app.post('/categoria', (req,res) => {
        console.log(req.body)
        res.send('Você esta a esta CATEGORIA via POST')
    }
    )

    //ROTAS PARA LOGIN --- http://localhost:3000/login
    app.get('/login', (req,res) => res.send('Você está em /login via GET') )
    app.post('/login', (req,res) => {
        console.log(req.body)
        res.send('Você esta a esta LOGIN via POST')
    }
    )

    //ROTAS PARA LANÇAMENTO --- http://localhost:3000/lancamento
    app.get('/lancamento', (req,res) => res.send('Você está em /lancamento via GET') )
    app.post('/lancamento', (req,res) => {
        console.log(req.body)
        res.send('Você esta a esta LALNCAMENTO via POST')
    }
    )
}


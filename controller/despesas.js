


module.exports = app => {
    app.get('/despesas', (req,res) => res.send('Você está em /despesas via GET') )
    app.post('/despesas', (req,res) => {
        console.log(req.body)
        res.send('Você esta a esta despesa via POST')
    }
    )

}


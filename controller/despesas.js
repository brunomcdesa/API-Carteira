<<<<<<< Updated upstream:despesas.js
//npm install consign


module.exports = app => {
    app.get('/despesas', (req,res) => res.send('Você está em /despesas via GET') )
    app.post('/despesas', (req,res) => {
        console.log(req.body)
        res.send('Você esta a rta despesa via POST')
    }
    )

}
=======



module.exports = app => {
    app.get('/despesas', (req,res) => res.send('Você está em /despesas via GET') )
    app.post('/despesas', (req,res) => {
        console.log(req.body)
        res.send('Você esta a esta despesa via POST')
    }
    )

}

>>>>>>> Stashed changes:controller/despesas.js


module.exports = app => {
    
    // ROTAS PARA LOGIN

    app.get('/login', (req,res) => res.send('Você está em /login via GET') )
    app.post('/login', (req,res) => {

        
        if(req.body.senha>=0){
            console.log('A senha deve conter números e letras ou somente letras');
            res.send('A senha deve conter números e letras ou somente letras')
        }else{
            console.log(req.body)
            res.send('Você esta a esta LOGIN via POST')
        }

        
           
        
        
    })
}

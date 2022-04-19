const express = require ('express')
const consign = require ('consign')
const bodyParser = require('body-parser')  




module.exports = () => {
    const app = express()

    consign().include('controller').into(app)
    app.use(bodyParser.urlencoded({extended:true}))
    app.use(bodyParser.json())
    
    return app
}
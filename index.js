// npm install express
// npm --save-dev install nodemon
// comando para iniciar a aplicação == npm start


const customExpress = require("./config/customExpress")


const app = customExpress()


app.listen(3000, () => console.log ('Tudo nos conformes!'))

const express = require('express')
const cors = require('cors') //implementar seguridad
const bodyParser =require('body-parser') //convertit el objeto enviado desde el formulario

const { dbConection } = require('../database/config')

class Server{
    constructor(){
        this.app = express()
        this.port = process.env.PORT
        this.usuarioPath = '/hurto' //Ruta de la API
        this.middlewares()
        this.routes()
        this.conectarDB()
    }

    listen(){
        this.app.listen(
            this.port, () => {
                console.log('Escuchando por el puerto '+this.port)
            } 
        )
    }
    middlewares(){//puentes entre el fronen y el bakent
        this.app.use(cors());
        this.app.use(bodyParser.json);
        this.app.use(cors());
        this.app.use(cors());

    }
    routes(){
        this.app.use(this.usuarioPath, require('../routes/hurto'))
    }

    async conectarDB(){
        await dbConection()
    }

}

module.exports = {Server} //Exportación de la clase
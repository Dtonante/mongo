const {Router} = require('express')

const route = Router()


//Listar todos los datos
//Importando el controlador
const { getHurto, postHurto, putHurto, deleteHurto } = require('../controllers/hurto')

route.get('/', getHurto)

route.post('/', postHurto)

route.put('/', putHurto)

route.delete('/', deleteHurto)
// //Consultar un dato
// route.get('/consultarUsuario', (req, res) => {
//     res.json({
//         msg: 'Lista Datos'
//     })
// })

// //Metodo para agregar datos
// route.post('/', (req, res) => {
//     res.json({
//         msg: 'Insercion exitosa'
//     })
// })


module.exports = route 
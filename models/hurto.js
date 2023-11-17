const {Schema, model} = require('mongoose')

const HurtoSchema = ({
    tipo_hurto:{
        type: String,
        unique:false,
        required:[true, 'El tipo de hurto es necesario']
    },

    direccion:{
        type:String,
        unique: false,
        required:[true, 'La dirección del hurto es requeriada'],
    },

    fecha: {
        type:String,
        required:[true, 'La fecha del hurto es requerida'],
    },

    ciudad: {
        type:String,
        required: [true, 'La ciudad es requerida']
    },

    descripcion: {
        type:String,
        required: [false]
    }
})


module.exports = model('Hurto', HurtoSchema)
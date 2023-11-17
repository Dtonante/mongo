const {response} = require('express')

Hurto = require('../models/hurto')

const getHurto = async(req, res) => {
    const hurtos = await Hurto.find(); //Obtener todos los dococumentos de una coleccion
    res.json({
        msg: hurtos
    })
}

const postHurto = async(req, res) => {
    const datos = req.query //Capturar datos de la URL-postman
    let mensaje = 'Insercion exitosa'
    try {
        const hurto = new Hurto(datos) //Instanciar el objeto
        await hurto.save()//Guardar en la base de dato  
        console.log(hurto) 
    } catch(error) {
        mensaje = error
        console.log(error)
    }

    res.json({
        msg: mensaje
    })
}


const putHurto = async(req, res) =>{
    const {tipo_hurto, direccion, fecha, ciudad, descripcion} = req.query
    try {
        const hurto = await Hurto.findOneAndUpdate({tipo_hurto: tipo_hurto},
            {direccion:direccion, fecha:fecha, ciudad:ciudad, descripcion:descripcion})
            mensaje = 'Actualizacion exitosa'
    } catch(error) {
        mensaje = error
    }
    res.json({
        msg:mensaje
    })
    
}

const deleteHurto = async(req, res) =>{
    const {nombre} = req.query //Desestructurar
    try {
        const hurto = await Hurto.findOneAndDelete({tipo_hurto: tipo_hurto})
            mensaje = 'Eliminacion exitosa'
    } catch(error) {
        mensaje = error
    }
    res.json({
        msg:mensaje
    })
    
}


module.exports = {
    getHurto,
    postHurto,
    putHurto,
    deleteHurto
}
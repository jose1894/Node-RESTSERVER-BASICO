
const { response, request } = require('express')

const usuariosGet = (req = request, res) => {

    const { q, 
            nombre = 'No name', 
            apikey, 
            page = 1, 
            limit = 10
    } = req.query

    res.send({
        msg: "GET api - controlador",
        q, 
        nombre, 
        apikey,
        page, 
        limit,
    })
}

const usuariosPost = (req, res) => {

    const { nombre, edad } = req.body

    res.send({
        msg:"POST api - controlador",
        nombre,
        edad
    })
}

const usuariosPut = (req, res) => {

    const { id } = req.params

    res.send({
        msg: "PUT api - controlador",
        id
    })
}

const usuariosPatch = (req, res) => {
    res.send({
        msg: "PATCH api - controlador"
    })
}

const usuariosDelete = (req, res) => {
    res.send({
        msg: "DELETE api - controlador"
    })
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}
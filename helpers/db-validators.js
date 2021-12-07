const Role = require('../models/role')
const Usuario = require('../models/usuario')

const esRolValido = async ( rol = '' ) => {
    const existeRol = await Role.findOne({ rol })

    if ( !existeRol ){
        throw new Error(` El rol ${rol} no esta agregado en la base de datos`)
    }

}

// Verificar que el correo existe
const existeEmail = async ( correo = '' ) => {

    const existe = await Usuario.findOne({ correo })

    if ( existe ) {
        throw new Error( `El correo ${ correo } ya esta registrado`)
    }
}

const existeUsuarioPorId = async ( id ) => {

    const existe = await Usuario.findById({ correo })

    if ( !existe ) {
        throw new Error( `El id ${ id } no existe`)
    }
}

module.exports = {
    esRolValido,
    existeEmail,
    existeUsuarioPorId
}
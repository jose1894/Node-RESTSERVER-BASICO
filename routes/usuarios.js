const { Router } = require( 'express' )
const { check } = require('express-validator')
const { validarCampos } = require('../middlewares/validar-campos')
const { esRolValido, existeEmail, existeUsuarioPorId } = require('../helpers/db-validators')

const { 
    usuariosGet,
    usuariosPost, 
    usuariosPut, 
    usuariosDelete, 
    usuariosPatch } = require('../controllers/usuarios')

const router =  Router()

router.get('/', usuariosGet)
// router.get('/', (req, res) => {
//     console.log('Get API')
// })

router.post('/', [ 
    check( 'nombre', 'El nombre es obligatorio').not().isEmpty(),
    check( 'password', 'El password debe ser de mas de 6 lentras').isLength({ min: 6}),
    check( 'correo' , 'El correo no es valido').isEmail(),
    check( 'correo' ).custom( existeEmail ),
    // check('rol', 'No es un rol valido').isIn(['ADMIN_ROLE','USER_ROLE']),
    check( 'rol' ).custom( esRolValido ),
    validarCampos
], usuariosPost)

router.put('/:id',[
    check('id', 'No es un ID valido').isMongoId(),
    check( 'id' ).custom( existeUsuarioPorId ),
    check( 'rol' ).custom( esRolValido ),
    validarCampos   
], usuariosPut)

router.delete('/:id',[
    check('id', 'No es un ID valido').isMongoId(),
    check( 'id' ).custom( existeUsuarioPorId ),
    validarCampos
], usuariosDelete)

router.patch('/', usuariosPatch)


module.exports = router
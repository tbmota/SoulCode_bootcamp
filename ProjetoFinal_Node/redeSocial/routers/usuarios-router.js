//chamando o express para o arquivo
const express = require('express')

//chamando a função específica do express que trabalha com rotas
const router = express.Router()

//requisição para o arquivo de rotas o controller referente a produtos
const usuariosController = require('../controllers/usuarios-controller')

//chamando a função específica do controller que irá trabalhar com a rota principal do meu sistema (rota de listagem de usuarios)
router.get('/', usuariosController.listar_usuarios)

module.exports = router;

router.get('/loginUsuarios', usuariosController.login_usuarios_get)

router.get('/cadastrarUsuarios', usuariosController.cadastrar_usuarios_get)

router.post('/cadastrarUsuarios', usuariosController.cadastrar_usuarios_post)

router.get('/deletarUsuarios/:id', usuariosController.deletar_usuarios)

router.get('/editarUsuarios/:id', usuariosController.editar_usuarios_get)

router.post('/editarUsuarios', usuariosController.editar_usuarios_post)



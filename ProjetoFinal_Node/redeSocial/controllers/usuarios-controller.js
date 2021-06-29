//controller é o responsável por executar uma consulta no banco de dados
const Usuarios = require('../models/usuarios-model')

//página com todos os usuários
//exportando a variável listar_usuarios que tem como conteúdo uma função que realiza uma busca dos usuarios no banco de dados
exports.listar_usuarios = (req, res) =>{

    let usuarios = Usuarios.find({}, (err, usuarios) =>{

        if(err) {
            console.error(err)
            return res.status(500).send("Erro ao consultar usuarios")
        }
        res.render('pages/usuarios', {usuarios: usuarios})
    })
}

//página inicial de login
exports.login_usuarios_get = (req, res) => {
    res.render('pages/loginUsuarios')
}

//página de cadastro de novos usuários
exports.cadastrar_usuarios_get = (req, res) => {
    res.render('pages/cadastrarUsuarios')
}

exports.cadastrar_usuarios_post = (req, res) => {
    console.log(req.body)

    let usuario = new Usuarios()

    usuario.nome = req.body.nome
    usuario.sobrenome = req.body.sobrenome
    usuario.cpf = req.body.cpf
    usuario.profissao = req.body.profissao
    usuario.email = req.body.email
    usuario.telefone = req.body.telefone
    usuario.date = req.body.date
    usuario.pais = req.body.pais
    usuario.senha = req.body.senha
    usuario.file = req.body.file
    usuario.msg = req.body.msg

    usuario.save(err => {
        if(err)

        return res.status(500).send("Erro ao cadastrar usuário")

        return res.redirect('/usuarios')
    })
}
//deletar usuário
exports.deletar_usuarios = (req, res) => {
    id = req.params.id

    Usuarios.deleteOne({_id: id}, (err, result) => {
        if(err)return res.status(500).send("Erro ao consultar usuário")
    })

    //usuarios.findByIdAndRemove(id).exec()

    res.redirect('/usuarios')
}

//função de edição
exports.editar_usuarios_get = (req, res) => {
    Usuarios.findById(req.params.id, (err, usuario) => {

        if(err)
        return res.status(500).send("Erro ao consultar usuário")

        res.render('pages/editarUsuarios', {usuario:usuario})

        console.log(usuario)
    })
}

exports.editar_usuarios_post = (req, res) => {
    console.log(id = req.body.id)

    Usuarios.findById(id, (err, usuario) =>{

        console.log(req.body.sobrenome)
        console.log(req.body.cpf)
        console.log(req.body.profissao)
        console.log(req.body.email)
        console.log(req.body.telefone)
        console.log(req.body.date)
        console.log(req.body.pais)
        console.log(req.body.senha)
        console.log(req.body.file)
        console.log(req.body.msg)
       
        usuario.nome = req.body.nome
        usuario.sobrenome = req.body.sobrenome
        usuario.cpf = req.body.cpf
        usuario.profissao = req.body.profissao
        usuario.email = req.body.email
        usuario.telefone = req.body.telefone
        usuario.date = req.body.date
        usuario.pais = req.body.pais
        usuario.senha = req.body.senha
        usuario.file = req.body.file
        usuario.msg = req.body.msg

        usuario.save(err => {
            
            if(err)
            return res.status(500).send("Erro ao cadastrar usuário")
            return res.redirect('/usuarios')
        })
    })
}
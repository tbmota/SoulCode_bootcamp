//estou requerendo o mongoose
const mongoose = require('mongoose')

//criando a estrutura do model
const Usuarios = mongoose.model('Usuarios', {

    nome: String,
    sobrenome: String,
    cpf: Number,
    profissao: String,
    email: String,
    telefone: Number,
    date: String,
    pais: String,
    senha: String,
    file: String,
    msg: String
})

//exportando o conteúdo, que me permite requerer posteiormente o model dentro de outros arquivos
module.exports = Usuarios;
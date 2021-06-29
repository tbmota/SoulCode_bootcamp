//chamando o express para a aplicação
const express = require('express');
const app = express();

//definindo a porta em que o servidor http vai funcionar
const port = 8000

//comando que adiciona o mongoose ao nosso arquivo
const mongoose = require('mongoose');

//função de conexão com o MongoDB Atlas
mongoose.connect('mongodb+srv://thammyrysbd:thammyrysbd@cluster0.pp6fk.mongodb.net/redeSocial?retryWrites=true&w=majority', {useNewUrlParser:true, useUnifiedTopology:true})

//template engine - arquivo de configuração da template view
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

//arquivo que permite que os dados sejam enviados através de formulários
app.use(express.urlencoded({extended: true}))
app.use(express.json())

//CSS
app.use(express.static(__dirname + '/public'));

//chamando as ROTAS através de usuário (não tem no teachable)
const usuarios_router = require('./routers/usuarios-router')
app.use('/usuarios', usuarios_router)

//rota principal da aplicação
app.get('/', (req, res) =>{
    res.send("Página Inicial")
})

//conexão com o servidor
app.listen(port, () =>{
    console.log("Servidor rodando na porta 8000")
})

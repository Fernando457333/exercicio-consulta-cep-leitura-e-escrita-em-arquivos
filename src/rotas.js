const express = require('express');
const { gerenciarEnderecos } = require('./controladores/enderecos');

const rotas = express();

rotas.get('/enderecos/:cep', gerenciarEnderecos)

module.exports = rotas
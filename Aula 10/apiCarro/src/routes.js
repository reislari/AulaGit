const express = require('express');
const router = express.Router();

const CarroController = require('./controllers/CarroController');

router.get('/carros', CarroController.buscarTodos);

router.get('/carro/:codigo', CarroController.buscarUm);

router.post('/carro', CarroController.inserir);

router.delete('/carro/:codigo', CarroController.excluir) 

router.put('/carro/:codigo', CarroController.alterar)

module.exports = router;
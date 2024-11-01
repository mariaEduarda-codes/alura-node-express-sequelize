const { Router } = require('express');

const CategoriasController = require('../controllers/CategoriaController.js');

const categoriasController = new CategoriasController();

const router = Router();

router.get('/categorias', (req, res) => {
  categoriasController.getAll(req, res);
});
router.get('/categorias/:id', (req, res) => categoriasController.getById(req, res));
router.post('/categorias', (req, res) => categoriasController.createNew(req, res));
router.put('/categorias/:id', (req, res) => categoriasController.atualiza(req, res));
router.delete('/categorias/:id', (req, res) => categoriasController.exclui(req, res));

module.exports = router;
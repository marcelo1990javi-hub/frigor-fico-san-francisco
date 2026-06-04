const express = require('express');
const router = express.Router();

// Controladores (a implementar)
// const { crearCompra, listarCompras, obtenerCompra, actualizarCompra, eliminarCompra } = require('./controllers');

/**
 * @route GET /api/compra
 * @description Listar todas las compras
 */
router.get('/', (req, res) => {
  res.status(200).json({
    message: 'Listar compras',
    data: []
  });
});

/**
 * @route POST /api/compra
 * @description Crear una nueva compra
 */
router.post('/', (req, res) => {
  res.status(201).json({
    message: 'Compra creada',
    data: req.body
  });
});

/**
 * @route GET /api/compra/:id
 * @description Obtener una compra específica
 */
router.get('/:id', (req, res) => {
  res.status(200).json({
    message: 'Obtener compra',
    id: req.params.id,
    data: {}
  });
});

/**
 * @route PUT /api/compra/:id
 * @description Actualizar una compra
 */
router.put('/:id', (req, res) => {
  res.status(200).json({
    message: 'Compra actualizada',
    id: req.params.id,
    data: req.body
  });
});

/**
 * @route DELETE /api/compra/:id
 * @description Eliminar una compra
 */
router.delete('/:id', (req, res) => {
  res.status(200).json({
    message: 'Compra eliminada',
    id: req.params.id
  });
});

/**
 * @route POST /api/compra/:id/control-calidad
 * @description Registrar control de calidad de una compra
 */
router.post('/:id/control-calidad', (req, res) => {
  res.status(200).json({
    message: 'Control de calidad registrado',
    id: req.params.id,
    data: req.body
  });
});

module.exports = router;

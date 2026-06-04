const express = require('express');
const router = express.Router();

// Controladores (a implementar)
// const { crearFaena, listarFaenas, obtenerFaena, actualizarFaena, eliminarFaena } = require('./controllers');

/**
 * @route GET /api/faena
 * @description Listar todas las faenas
 */
router.get('/', (req, res) => {
  res.status(200).json({
    message: 'Listar faenas',
    data: []
  });
});

/**
 * @route POST /api/faena
 * @description Crear una nueva faena
 */
router.post('/', (req, res) => {
  res.status(201).json({
    message: 'Faena creada',
    data: req.body
  });
});

/**
 * @route GET /api/faena/:id
 * @description Obtener una faena específica
 */
router.get('/:id', (req, res) => {
  res.status(200).json({
    message: 'Obtener faena',
    id: req.params.id,
    data: {}
  });
});

/**
 * @route PUT /api/faena/:id
 * @description Actualizar una faena
 */
router.put('/:id', (req, res) => {
  res.status(200).json({
    message: 'Faena actualizada',
    id: req.params.id,
    data: req.body
  });
});

/**
 * @route DELETE /api/faena/:id
 * @description Eliminar una faena
 */
router.delete('/:id', (req, res) => {
  res.status(200).json({
    message: 'Faena eliminada',
    id: req.params.id
  });
});

/**
 * @route POST /api/faena/:id/proceso
 * @description Registrar un paso del proceso de faena
 */
router.post('/:id/proceso', (req, res) => {
  res.status(200).json({
    message: 'Proceso registrado',
    id: req.params.id,
    data: req.body
  });
});

/**
 * @route POST /api/faena/:id/merma
 * @description Registrar merma/desperdicio
 */
router.post('/:id/merma', (req, res) => {
  res.status(200).json({
    message: 'Merma registrada',
    id: req.params.id,
    data: req.body
  });
});

/**
 * @route GET /api/faena/:id/trazabilidad
 * @description Obtener trazabilidad completa de una faena
 */
router.get('/:id/trazabilidad', (req, res) => {
  res.status(200).json({
    message: 'Trazabilidad de faena',
    id: req.params.id,
    data: {}
  });
});

module.exports = router;

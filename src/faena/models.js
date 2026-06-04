/**
 * Modelo de Faena
 * 
 * Propiedades:
 * - id: Identificador único
 * - numeroFaena: Número de referencia
 * - compraId: Referencia a compra asociada
 * - fechaInicio: Fecha de inicio del proceso
 * - fechaFin: Fecha de finalización
 * - lote: Número de lote procesado
 * - estadoProducto: Tipo de materia prima
 * - cantidadInicial: Cantidad inicial de materia prima
 * - cantidadFinal: Cantidad final de producto terminado
 * - mermaInfo: Información sobre mermas
 * - operarios: Lista de operarios involucrados
 * - procesos: Pasos del proceso de faena
 * - estado: Estado actual
 * - observaciones: Notas del proceso
 * - createdAt: Fecha de creación
 * - updatedAt: Fecha de última actualización
 */

const FaenaModel = {
  id: String,
  numeroFaena: String,
  compraId: String, // Referencia a Compra
  fechaInicio: Date,
  fechaFin: Date,
  lote: String,
  estadoProducto: String, // Tipo de materia prima recibida
  cantidadInicial: {
    valor: Number,
    unidad: String // kg, unidades, etc.
  },
  cantidadFinal: {
    valor: Number,
    unidad: String
  },
  mermaInfo: {
    totalMerma: {
      valor: Number,
      unidad: String
    },
    porcentajeMerma: Number,
    detalles: [
      {
        tipo: String, // hueso, grasa, desperdicio, etc.
        cantidad: Number,
        unidad: String,
        destino: String // compostaje, reciclaje, etc.
      }
    ]
  },
  operarios: [
    {
      nombre: String,
      cedula: String,
      rol: String, // faenador, inspector, supervisor, etc.
      horaInicio: Date,
      horaFin: Date
    }
  ],
  procesos: [
    {
      numero: Number,
      nombre: String, // despiece, congelado, empaque, etc.
      descripcion: String,
      duracion: Number, // en minutos
      responsable: String,
      estado: String, // completado, en proceso, pendiente
      timestamp: Date
    }
  ],
  productosGenerados: [
    {
      tipoProducto: String,
      cantidad: Number,
      unidad: String,
      loteProducto: String,
      destino: String
    }
  ],
  estado: String, // iniciada, en proceso, completada, cancelada
  documentos: [
    {
      nombre: String,
      url: String,
      tipo: String
    }
  ],
  observaciones: String,
  createdAt: Date,
  updatedAt: Date
};

module.exports = FaenaModel;

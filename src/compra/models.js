/**
 * Modelo de Compra
 * 
 * Propiedades:
 * - id: Identificador único
 * - numeroCompra: Número de referencia
 * - proveedor: Información del proveedor
 * - fecha: Fecha de la compra
 * - producto: Tipo de materia prima
 * - cantidad: Cantidad recibida
 * - unidad: Unidad de medida
 * - lote: Número de lote
 * - estado: Estado actual
 * - controlCalidad: Resultado del control
 * - observaciones: Notas adicionales
 * - createdAt: Fecha de creación
 * - updatedAt: Fecha de última actualización
 */

const CompraModel = {
  id: String,
  numeroCompra: String,
  proveedor: {
    nombre: String,
    rut: String,
    contacto: String,
    telefono: String,
    email: String
  },
  fecha: Date,
  producto: String,
  cantidad: Number,
  unidad: String, // kg, litros, unidades, etc.
  lote: String,
  estado: String, // recibida, inspeccionada, aceptada, rechazada
  controlCalidad: {
    temperatura: Number,
    apariencia: String,
    olor: String,
    resultado: String, // aceptado, rechazado
    inspector: String,
    fecha: Date,
    observaciones: String
  },
  documentos: [
    {
      nombre: String,
      url: String,
      tipo: String // remisión, factura, certificado, etc.
    }
  ],
  observaciones: String,
  createdAt: Date,
  updatedAt: Date
};

module.exports = CompraModel;

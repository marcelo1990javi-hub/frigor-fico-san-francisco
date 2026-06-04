# Frigor Fico San Francisco - Sistema de Trazabilidad

Sistema de gestión y trazabilidad para la empresa Frigor Fico San Francisco.

## 📋 Descripción

Sistema para realizar seguimiento completo del movimiento de productos, desde la compra hasta la faena y distribución final.

## 🎯 Módulos Principales

### 1. **Compra**
- Registro de proveedores
- Recepción de materia prima
- Control de calidad inicial
- Documentación de entrada

### 2. **Faena**
- Proceso de transformación de materia prima
- Control de producción
- Trazabilidad de lotes
- Registro de mermas y desperdicio

### 3. **Distribución** (Futuro)
- Almacenamiento
- Despacho de productos
- Entrega a clientes

## 🏗️ Estructura del Proyecto

```
frigor-fico-san-francisco/
├── docs/                      # Documentación
│   ├── requisitos.md         # Requisitos del sistema
│   ├── modelos.md            # Modelos de datos
│   └── flujos.md             # Flujos de procesos
├── src/
│   ├── compra/               # Módulo de compra
│   │   ├── controllers/
│   │   ├── services/
│   │   ├── models/
│   │   └── routes/
│   ├── faena/                # Módulo de faena
│   │   ├── controllers/
│   │   ├── services/
│   │   ├── models/
│   │   └── routes/
│   ├── common/               # Código compartido
│   │   ├── middleware/
│   │   ├── utils/
│   │   └── constants/
│   └── main.js              # Punto de entrada
├── .gitignore
├── package.json
└── README.md
```

## 🚀 Próximos Pasos

- [ ] Definir modelo de datos detallado
- [ ] Crear endpoints para módulo de Compra
- [ ] Crear endpoints para módulo de Faena
- [ ] Implementar autenticación
- [ ] Crear documentación API

---

**Estado**: En desarrollo  
**Última actualización**: Junio 2026

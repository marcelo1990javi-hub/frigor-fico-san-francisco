# Guía de Instalación - Sistema de Trazabilidad

## Requisitos Previos

- **Node.js**: v18.0.0 o superior
- **Docker**: v20.0 o superior (opcional pero recomendado)
- **Docker Compose**: v1.29 o superior (opcional)
- **PostgreSQL**: v14 (si no usas Docker)
- **Git**: para clonar el repositorio

## Opción 1: Instalación con Docker (Recomendado)

### Paso 1: Clonar el repositorio

```bash
git clone https://github.com/marcelo1990javi-hub/frigor-fico-san-francisco.git
cd frigor-fico-san-francisco
```

### Paso 2: Iniciar los servicios

```bash
docker-compose up -d
```

Esto inicia:
- PostgreSQL (puerto 5432)
- Backend API (puerto 3001)
- Frontend (puerto 3000)
- pgAdmin (puerto 5050)

### Paso 3: Verificar que todo está funcionando

```bash
# Verificar servicios
docker-compose ps

# Ver logs del backend
docker-compose logs -f backend

# Ver logs del frontend
docker-compose logs -f frontend
```

### Paso 4: Acceder a la aplicación

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:3001
- **pgAdmin**: http://localhost:5050
  - Email: admin@frigor.local
  - Contraseña: admin

## Opción 2: Instalación Manual

### Backend

#### Paso 1: Configurar Base de Datos

```bash
# Crear base de datos
createdb frigor_fico_db

# Ejecutar script de inicialización
psql frigor_fico_db < database/init.sql
```

#### Paso 2: Instalar dependencias del Backend

```bash
cd backend
npm install
```

#### Paso 3: Configurar variables de entorno

```bash
cp .env.example .env
```

Editar `.env` con tus valores:
```
DATABASE_URL=postgresql://frigor_user:frigor_secure_pass_2024@localhost:5432/frigor_fico_db
JWT_SECRET=tu_clave_secreta_super_segura
```

#### Paso 4: Iniciar el Backend

```bash
npm run dev
```

El servidor estará disponible en `http://localhost:3001`

### Frontend

#### Paso 1: Instalar dependencias

```bash
cd ../frontend
npm install
```

#### Paso 2: Configurar variables de entorno

```bash
cp .env.example .env
```

#### Paso 3: Iniciar el Frontend

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:3000`

## Credenciales por Defecto

| Usuario | Contraseña | Rol |
|---------|-----------|-----|
| admin | admin123 | Administrador |

**IMPORTANTE**: Cambiar estas credenciales en producción.

## Estructura de Directorios

```
frigor-fico/
├── backend/
│   ├── src/
│   │   ├── index.ts              # Punto de entrada
│   │   ├── config/               # Configuración
│   │   ├── controllers/          # Controladores
│   │   ├── services/             # Servicios
│   │   ├── models/               # Modelos TypeORM
│   │   ├── middleware/           # Middleware
│   │   ├── utils/                # Utilidades
│   │   └── database/             # Conexión BD
│   ├── package.json
│   ├── tsconfig.json
│   └── Dockerfile
├── frontend/
│   ├── src/
│   │   ├── components/           # Componentes React
│   │   ├── pages/                # Páginas
│   │   ├── store/                # Redux Store
│   │   ├── services/             # Servicios API
│   │   └── App.tsx
│   ├── package.json
│   └── Dockerfile
├── database/
│   └── init.sql                  # Script de inicialización
├── docs/                         # Documentación
├── docker-compose.yml
└── .gitignore
```

## Verificar la Instalación

### 1. Backend

```bash
# Probar endpoint de salud
curl http://localhost:3001/health

# Respuesta esperada
{
  "status": "ok",
  "timestamp": "2024-01-10T12:00:00Z"
}
```

### 2. Base de Datos

```bash
# Conectarse a PostgreSQL
psql frigor_fico_db

# Ver tablas
\dt

# Ver usuarios
SELECT * FROM users;
```

### 3. Frontend

- Abre http://localhost:3000 en el navegador
- Ingresa con usuario: `admin` / contraseña: `admin123`

## Comandos Útiles

### Docker

```bash
# Detener todos los servicios
docker-compose down

# Reconstruir imagenes
docker-compose build --no-cache

# Ver logs en tiempo real
docker-compose logs -f

# Ejecutar comando en un contenedor
docker-compose exec backend npm run migrate
```

### Base de Datos

```bash
# Acceder a PostgreSQL
docker-compose exec postgres psql -U frigor_user -d frigor_fico_db

# Hacer backup
pg_dump frigor_fico_db > backup.sql

# Restaurar desde backup
psql frigor_fico_db < backup.sql
```

### Backend

```bash
# Ejecutar migraciones
npm run migrate

# Ejecutar seeds
npm run seed

# Ejecutar pruebas
npm run test

# Construir para producción
npm run build
```

## Troubleshooting

### Puerto ya en uso

```bash
# Encontrar qué usa el puerto
lsof -i :3000  # Frontend
lsof -i :3001  # Backend
lsof -i :5432  # PostgreSQL

# Liberar puerto (Mac/Linux)
kill -9 <PID>
```

### Base de datos no se conecta

```bash
# Verificar conexión a PostgreSQL
psql postgresql://frigor_user:frigor_secure_pass_2024@localhost:5432/frigor_fico_db

# Ver estado del contenedor PostgreSQL
docker-compose ps postgres
```

### Frontend en blanco

1. Verificar que el backend esté corriendo
2. Revisar logs: `docker-compose logs frontend`
3. Verificar variable de entorno `REACT_APP_API_URL`

## Próximos Pasos

1. Cambiar credenciales de administrador
2. Agregar usuarios adicionales
3. Configurar cámaras de almacén
4. Registrar productos
5. Iniciar movimientos de inventario

## Soporte

Para problemas o preguntas:
1. Revisar logs: `docker-compose logs`
2. Verificar documentación en `docs/`
3. Crear issue en GitHub

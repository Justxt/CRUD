# Aplicación CRUD Fullstack con Autenticación

Holap! CRUD usando NestJS para el backend y React para el frontend.

## Esta organizado:
crud/
crud-back/        # Todo lo del backend (NestJS)
crud-front/       # Todo lo del frontend (React)

## Backend (NestJS) - Frontend (React)

El backend es el servidor que maneja todos los datos y proporciona una API para que el frontend pueda usarlos.
El fronted la parte donde se interactuara con las apis.

### ¿Que hace?

- **Autenticación completa**: registro, inicio de sesión y cierre de sesión
- Protección de rutas mediante JWT
- Crear, leer, actualizar y eliminar usuarios (el CRUD completo)
- Conectarse a una base de datos PostgreSQL mediante TypeORM a través de 'Supabase'

### Rutas de Autenticación

| Método | Ruta              | ¿Qué hace?                |
|--------|-------------------|----------------------------|
| POST   | /api/auth/login   | Inicia sesión de usuario   |
| POST   | /api/auth/register| Registra un nuevo usuario  |

### Rutas de Usuarios (Protegidas)

| Método | Ruta            | ¿Qué hace?                |
|--------|-----------------|----------------------------|
| GET    | /api/users      | Trae todos los usuarios    |
| GET    | /api/users/:id  | Busca un usuario por su ID |
| POST   | /api/users      | Crea un usuario nuevo      |
| PUT    | /api/users/:id  | Actualiza un usuario       |
| DELETE | /api/users/:id  | Elimina un usuario         |

### ¿Que tiene?

- **Autenticación**:
  - Pantalla de login para acceder al sistema
  - Pantalla de registro para nuevos usuarios
  - Rutas protegidas si no se encuentra logeado
  - Gestión de sesiones con JWT

- **Funcionalidades CRUD**:
  - Una tabla para ver todos los usuarios (solo accesible para usuarios autenticados)
  - Un formulario para crear usuarios nuevos
  - Una vista para ver los detalles de un usuario
  - Un formulario para editar usuarios
  - Botones para eliminar usuarios

## Cómo instalar y ejecutar

### Backend

1. Ir a la carpeta del backend:
   cd crud-back

2. Instalar dependencias:
   npm install

3. Crea un archivo `.env` en la carpeta `crud-back`:
   DATABASE_HOST=localhost
   DATABASE_PORT=5432
   DATABASE_USERNAME=postgres
   DATABASE_PASSWORD=postgres
   DATABASE_NAME=nestjs_mvc_crud

4. Correr el back:
   npm run start:dev

### Frontend

1. Ir a la carpeta del frontend:
   cd crud-front

2. Instalar dependencias:
   npm install

3. Correr el front:
   npm run dev
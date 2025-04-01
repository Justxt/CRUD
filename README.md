# Aplicación CRUD Fullstack

Holap! CRUD (Crear, Leer, Actualizar y Eliminar) usando NestJS para el backend y React para el frontend.

## Esta organizado:
crud/
├── crud-back/        # Todo lo del backend (NestJS)
└── crud-front/       # Todo lo del frontend (React)

## Backend (NestJS) - Frontend (React)

El backend es el servidor que maneja todos los datos y proporciona una API para que el frontend pueda usarlos.
El fronted la parte donde se interactuara con las apis.

### ¿Que hace?

- Crear, leer, actualizar y eliminar usuarios (el CRUD completo)
- Conectarse a una base de datos PostgreSQL mediante TypeORM local y en la nube

### Rutas

| Método | Ruta            | ¿Qué hace?                |
|--------|-----------------|----------------------------|
| GET    | /api/users      | Trae todos los usuarios    |
| GET    | /api/users/:id  | Busca un usuario por su ID |
| POST   | /api/users      | Crea un usuario nuevo      |
| PUT    | /api/users/:id  | Actualiza un usuario       |
| DELETE | /api/users/:id  | Elimina un usuario         |


### ¿Que tiene?

- Una tabla para ver todos los usuarios
- Un formulario para crear usuarios nuevos
- Una vista para ver los detalles de un usuario
- Un formulario para editar usuarios
- Botones para eliminar usuarios
- Navegación entre páginas con React Router
- Diseño bonito gracias a Tailwind CSS

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
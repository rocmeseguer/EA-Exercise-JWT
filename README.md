# EA API REST + JWT con Express y TypeScript

Este proyecto implementa una API REST con autenticación JWT usando Express y TypeScript. Incluye manejo de tokens de acceso y refresh tokens para una mejor seguridad.

## Estructura del Proyecto

```
├── src/
│   ├── controllers/
│   │   ├── auth.controller.ts    # Controladores de autenticación
│   │   └── user.controller.ts    # Controladores de usuarios
│   ├── middlewares/
│   │   └── authJWT.ts           # Middlewares de autenticación y autorización
│   ├── models/
│   │   ├── JWTPayload.ts        # Interface para payload JWT
│   │   └── User.ts              # Interface de Usuario
│   ├── routes/
│   │   ├── auth.ts              # Rutas de autenticación
│   │   └── user.ts              # Rutas de usuarios
│   ├── services/
│   │   └── user.service.ts      # Servicio de usuarios
│   ├── app.ts                   # Configuración de Express
│   └── index.ts                 # Punto de entrada
├── @types/
│   └── express/                 # Extensiones de tipos para Express
├── test/
│   └── api.http                # Tests de API con REST Client
└── package.json
```

## Requisitos Previos

- Node.js (versión 14.x o superior)
- npm (incluido con Node.js)
- TypeScript instalado globalmente:


Instalar dependencias
```
npm install
```

## Uso

1. Compilar el proyecto:
```
npm run build
```

2. Iniciar el servidor:
```
npm start
```

El servidor se iniciará en http://localhost:4000

## Endpoints de la API

### Autenticación

- POST `/api/auth/signup`: Registro de nuevo usuario
- POST `/api/auth/signin`: Inicio de sesión
- POST `/api/auth/refresh`: Renovar access token

### Usuarios

- GET `/api/users`: Obtener todos los usuarios
- GET `/api/users/:id`: Obtener usuario específico
- PUT `/api/users/:id`: Actualizar usuario (requiere autenticación y ser propietario)
- DELETE `/api/users/:id`: Eliminar usuario (requiere autenticación y ser propietario)

## Testing

El proyecto incluye un archivo `api.http` para testing usando la extensión REST Client de VS Code. Este archivo contiene ejemplos de todas las peticiones posibles y guarda automáticamente los tokens JWT para su reutilización.

## Implementación de JWT

El sistema implementa un esquema de autenticación dual con:

1. Access Token:
   - Duración corta (15 minutos)
   - Usado para autenticar operaciones en la API
   - Contiene el tipo 'access' en el payload

2. Refresh Token:
   - Duración larga (7 días)
   - Usado solo para obtener nuevos access tokens
   - Contiene el tipo 'refresh' en el payload

Los tokens se validan a través de middlewares:
- `verifyToken`: Valida access tokens
- `verifyRefreshToken`: Valida refresh tokens
- `isOwner`: Verifica que el usuario sea propietario del recurso


## Referencias

- [Implementando sistema JWT con TypeScript y Node](https://nozzlegear.com/blog/implementing-a-jwt-auth-system-with-typescript-and-node)
- [Extender objeto Request de Express](https://dev.to/kwabenberko/extend-express-s-request-object-with-typescript-declaration-merging-1nn5)


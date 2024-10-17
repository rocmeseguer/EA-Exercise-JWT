# Typescript

## JWTPayLoad Type

https://nozzlegear.com/blog/implementing-a-jwt-auth-system-with-typescript-and-node

alternatives 

`jwtPayload = <any>jwt.verify(token, config.SECRET);`


## Extend Express Request Object

https://dev.to/kwabenberko/extend-express-s-request-object-with-typescript-declaration-merging-1nn5

alternatives

`res.locals.jwtPayload = jwtPayload;`

# EA API REST + JWT con Express

## Codigo inspirado en

https://nozzlegear.com/blog/implementing-a-jwt-auth-system-with-typescript-and-node

https://dev.to/kwabenberko/extend-express-s-request-object-with-typescript-declaration-merging-1nn5

## Requisitos Previos

Asegúrate de tener instalados los siguientes programas en tu sistema:

- [Node.js](https://nodejs.org/) (versión 14.x o superior)
- [MongoDB](https://www.mongodb.com/) (puede ser local o en la nube a través de MongoDB Atlas)
- [npm](https://www.npmjs.com/) 

Instalar TypeScript
```
npm install -g typescript
```

## Clonar el proyecto

```
git clone https://github.com/rocmeseguer/EA-Exercise-RestAPI.git
cd EA-Exercise-RestAPI
```

## Dependencias del proyecto

### Instalar todas las dependencias
```
npm install
```

## Estructura del proyecto

```
├── src
│   ├── middlewares
│   │   └── authJWT.ts  # verifyToken() and isOwner()
│   ├── routes
│   ├── controllers
│   ├── services
│   ├── models
│   ├── database.ts
│   └── app.ts         
├── @types / express
├── build
├── package.json    
├── tsconfig.json      
├── node_modules
├── .gitignore
├── LICENSE
└── README.md
```

## Ejecutar
```
tsc
node build/index.js
```


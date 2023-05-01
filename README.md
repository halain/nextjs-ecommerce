# Next.js E-Commerce Shop App


## Localmente utiliza bd de docker, para correr la bd:

```bash
docker-compose up -d
```
* El parametro -d __detached__ es para que el proceso de mongo sea independiente a la consola 
* MongoDB URL local: 
```
    mongodb://localhost:27017/teslodb
```

## Configurar variables de entorno 
 * Renombrar archivo __.env.example__ por __.env__
 
## Llenar BD con data de prueba mediante la api
 * Lammar a:
 ```
 http://localhost:3000/api/seed
 ``` 

## Correr proyecto
```bash
yarn dev
```

Open [http://localhost:3000]
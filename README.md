# CRUD Cuidado Mascota

Backend sencillo creado con Node.js, Express, Mongoose y arquitectura hexagonal.

La API permite crear, listar, buscar, actualizar y eliminar recomendaciones de cuidado para mascotas usando una sola coleccion en MongoDB llamada `cuidado_mascota`.

## Tecnologias

- Node.js
- Express
- MongoDB
- Mongoose
- Dotenv
- Cors

## Estructura

```txt
src/
  application/
    use-cases/
  domain/
    entities/
    repositories/
  infrastructure/
    database/
      mongoose/
    http/
      controllers/
      middlewares/
      routes/
    repositories/
```

## Variables de entorno

Crear un archivo `.env` basado en `.env.example`:

```env
PORT=3000
MONGODB_URI=mongodb://127.0.0.1:27017/cuidado_mascota_db
```

## Instalacion

```bash
npm install
```

## Ejecutar

```bash
npm start
```

Para desarrollo:

```bash
npm run dev
```

Servidor:

```txt
http://localhost:3000
```

## Coleccion

Nombre de la coleccion en MongoDB:

```txt
cuidado_mascota
```

Campos:

```json
{
  "id_mascota": "MASC-001",
  "recomendacion_mascota": "Mantener agua fresca disponible durante todo el dia.",
  "cuidado_mascota": "Cepillado y paseo corto en la manana.",
  "gramo_alimentacion": 250,
  "frecuencia_cuidado": "Diario",
  "nombre_responsable": "Laura Gomez"
}
```

## Endpoints

Base URL:

```txt
http://localhost:3000/api/cuidado-mascota
```

| Metodo | Ruta | Descripcion |
| --- | --- | --- |
| POST | `/api/cuidado-mascota` | Crear un cuidado de mascota |
| GET | `/api/cuidado-mascota` | Listar todos los cuidados |
| GET | `/api/cuidado-mascota/:id` | Buscar un cuidado por id |
| PUT | `/api/cuidado-mascota/:id` | Actualizar un cuidado |
| DELETE | `/api/cuidado-mascota/:id` | Eliminar un cuidado |

## Ejemplo POST

```json
{
  "id_mascota": "MASC-001",
  "recomendacion_mascota": "Mantener agua fresca disponible durante todo el dia.",
  "cuidado_mascota": "Cepillado y paseo corto en la manana.",
  "gramo_alimentacion": 250,
  "frecuencia_cuidado": "Diario",
  "nombre_responsable": "Laura Gomez"
}
```

```txt
base_url = http://localhost:3000
```

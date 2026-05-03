require('dotenv').config();

const mongoose = require('mongoose');

async function connectMongo() {
  const mongoUri = process.env.MONGODB_URI;

  if (!mongoUri) {
    throw new Error('Falta configurar MONGODB_URI en el archivo .env');
  }

  await mongoose.connect(mongoUri);
  console.log('Conexion a MongoDB lista');
}

module.exports = { connectMongo };

const express = require('express');
const cors = require('cors');
const { cuidadoMascotaRouter } = require('./routes/cuidadoMascotaRoutes');

function createApp() {
  const app = express();

  app.use(cors());
  app.use(express.json());

  app.get('/', (req, res) => {
    res.json({
      message: 'API cuidado_mascota funcionando'
    });
  });

  app.use('/api/cuidado-mascota', cuidadoMascotaRouter);

  return app;
}

module.exports = { createApp };

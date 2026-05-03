const { createApp } = require('./infrastructure/http/app');
const { connectMongo } = require('./infrastructure/database/mongoConnection');

const port = process.env.PORT || 3000;

async function bootstrap() {
  await connectMongo();

  const app = createApp();

  app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
  });
}

bootstrap().catch((error) => {
  console.error('No se pudo iniciar el servidor:', error.message);
  process.exit(1);
});

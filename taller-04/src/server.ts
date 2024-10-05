import express from 'express';
import cors from 'cors';
import userRoutes from './user.routes';


const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use('/users', userRoutes);

//Puerto
console.log('Iniciando servidor...');
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

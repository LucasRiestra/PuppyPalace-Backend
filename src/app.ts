import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import usuariosRoutes from './routes/usuarios';

const app = express();
const prisma = new PrismaClient();

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Bienvenido a PuppyPalace API' });
});

// Rutas de usuarios
app.use('/api/usuarios', usuariosRoutes);

// Manejo de errores
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Algo salió mal!' });
});

export { app, prisma };

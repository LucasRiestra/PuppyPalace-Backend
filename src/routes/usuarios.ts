import { Router, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

// GET - Obtener todos los usuarios
router.get('/', async (req: Request, res: Response) => {
  try {
    const usuarios = await prisma.usuario.findMany();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener usuarios' });
  }
});

// POST - Crear un nuevo usuario
router.post('/', async (req: Request, res: Response) => {
  try {
    const { nombre, correo_electronico, contrasena, telefono, direccion } = req.body;
    
    console.log('Datos recibidos:', req.body); // Para debug
    
    const nuevoUsuario = await prisma.usuario.create({
      data: {
        nombre,
        correo_electronico,
        contrasena,
        telefono,
        direccion
      }
    });
    
    res.status(201).json(nuevoUsuario);
  } catch (error) {
    console.error('Error completo:', error); // Mostrar error completo
    res.status(400).json({ 
      error: 'Error al crear usuario',
      details: error instanceof Error ? error.message : 'Error desconocido'
    });
  }
});

export default router;

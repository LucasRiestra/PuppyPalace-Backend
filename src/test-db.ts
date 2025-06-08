import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

// Cargar variables de entorno explícitamente
dotenv.config();

const prisma = new PrismaClient({
  log: ['query', 'info', 'warn', 'error'],
});

async function main() {
  try {
    // Imprimir la URL de conexión (sin mostrar contraseñas)
    console.log('Intentando conectar a:', process.env.DATABASE_URL);
    
    // Intenta una operación simple para verificar la conexión
    const count = await prisma.usuario.count();
    console.log('Conexión a la base de datos exitosa!');
    console.log(`Número de usuarios: ${count}`);
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();

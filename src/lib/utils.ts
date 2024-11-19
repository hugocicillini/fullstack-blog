import mongoose from 'mongoose';

interface ConnectionType {
  isConnected?: number;
}

const connection: ConnectionType = {};

export const connectToDb = async (): Promise<void> => {
  try {
    if (connection.isConnected) {
      return;
    }

    const uri = process.env.URI;

    if (!uri) {
      throw new Error('Database URI não informada!');
    }

    const db = await mongoose.connect(uri);

    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.error('Error ao conectar a database', error);

    throw new Error('Falha ao conectar a database!');
  }
};

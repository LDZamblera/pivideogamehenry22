const request = require('supertest');
const express = require('express');
const app = express();
app.use(express.json());

// Importa tus rutas aquí
const DeleteRoute = require('../routes/DeleteRoute.js');

// Usar tus rutas en la aplicación
app.use('/api/games', DeleteRoute);

// Importa tu modelo Videogame
const { Videogame } = require('../db');

// Prueba de eliminación
describe('DELETE /api/games/:id', () => {
  it('debe eliminar un juego por ID', async () => {
    // Crea un juego ficticio en la base de datos (o usa un fixture si es necesario)
    const newGame = await Videogame.create({
      name: 'Nombre del Juego',
      description: 'Descripción del Juego',
      released: '2023-09-26', // Asegúrate de proporcionar una fecha válida
      // Otros campos del juego
    });

    const response = await request(app)
      .delete(`/api/games/${newGame.id}`)
      .expect(200);

    expect(response.text).toBe('se elimino con exito');
  });

  it('debe manejar errores si el juego no existe', async () => {
    const response = await request(app)
      .delete('/api/games/999') // Un ID que no existe
      .expect(400);

    expect(response.body).toEqual({ error: 'No se recibieron los parámetros necesarios para borrar el Post' });
  });
});

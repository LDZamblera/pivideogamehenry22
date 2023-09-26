import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './Card';

// Mock de datos para usar en la prueba
const cardData = {
  id: 1,
  name: 'Game Title',
  rating: 4.5,
  img: 'image-url.jpg',
  genres: ['Action', 'Adventure'],
};

test('Renderiza el componente Card correctamente', () => {
  // Renderiza el componente con los datos de prueba
  render(
    <Card
      id={cardData.id}
      name={cardData.name}
      rating={cardData.rating}
      img={cardData.img}
      genres={cardData.genres}
    />
  );

  // Verifica que el nombre del juego se muestre correctamente
  const nameElement = screen.getByText(cardData.name);
  expect(nameElement).toBeInTheDocument();

  // Verifica que el rating se muestre correctamente
  const ratingElement = screen.getByText(`Rating: ${cardData.rating}`);
  expect(ratingElement).toBeInTheDocument();

  // Verifica que los géneros se muestren correctamente
  const genresElement = screen.getByText(`Generos: ${cardData.genres.join(', ')}`);
  expect(genresElement).toBeInTheDocument();

  // También puedes agregar más aserciones según sea necesario
});

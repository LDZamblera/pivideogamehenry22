module.exports = {
    // Patrón que especifica qué archivos de prueba se deben ejecutar.
    testMatch: ['<rootDir>/src/tests/**/*.test.js'],
  
    // Transformador para manejar archivos JavaScript y JSX con Babel.
    transform: {
      '^.+\\.(js|jsx)$': 'babel-jest',
    },
  };
  
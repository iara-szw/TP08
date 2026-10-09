import swaggerAutogen from 'swagger-autogen';


const swaggerAutogenInstance = swaggerAutogen();

const outputFile = './api-docs.json'; 
const endpointsFiles = ['./src/app.js']; // Cambia por index.js si corresponde

const doc = {
  info: {
    title: 'Mi API en Node.js',
    description: 'Documentación generada automáticamente con swagger-autogen',
  },
  host: 'localhost:3000',
  schemes: ['http'],
};

// Se ejecuta usando la instancia creada arriba
swaggerAutogenInstance(outputFile, endpointsFiles, doc);
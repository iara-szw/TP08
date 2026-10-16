import swaggerAutogen from 'swagger-autogen';


const swaggerAutogenInstance = swaggerAutogen();

const outputFile = './api-docs.json'; 
const endpointsFiles = ['./src/app.js']; 

const doc = {
  info: {
    title: 'Mi API en Node.js',
    description: 'Documentación generada automáticamente con swagger-autogen',
  },
  host: 'localhost:3000',
  schemes: ['http'],
};

swaggerAutogenInstance(outputFile, endpointsFiles, doc);
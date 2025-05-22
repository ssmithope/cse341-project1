const swaggerAutogen = require('swagger-autogen')();
const outputFile = './swagger.json'; 
const endpointsFiles = ['./routes/index.js'];
const doc = {
    info: {
        title: 'users API',
        description: 'Users API'
    },
    host: 'localhost:10000',
    schemes:  [ 'http', 'https'],
};
swaggerAutogen(outputFile, endpointsFiles, doc)
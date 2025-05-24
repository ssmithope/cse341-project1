const swaggerAutogen = require('swagger-autogen')();
const outputFile = './swagger.json'; 
const endpointsFiles = ['./routes/index.js'];
const doc = {
    info: {
        title: 'users API',
        description: 'Users API'
    },
    host: 'cse341-project1-62aw.onrender.com',
    schemes: ['https'],

};
swaggerAutogen(outputFile, endpointsFiles, doc)
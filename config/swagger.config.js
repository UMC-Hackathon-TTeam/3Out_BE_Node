const SwaggerJsdoc = require("swagger-jsdoc");

const options = {
    definition: {
        info: {
            title: '3Out API',
            version: '1.0.0',
            description: '3Out API with express, API 설명'
        },
        host: 'localhost:3000',
        basepath: '../'
    },
    apis: ['./src/routes/*.js', './swagger/*']
};

const specs = SwaggerJsdoc(options);

module.exports = { specs }
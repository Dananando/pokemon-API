const options = {
    swaggerDefinition: {
        info: {
            description: 'First generation pokemons API',
            title: 'The 151 first pokemons are here',
            version: '1.0.0',
        },
        host: `localhost:${process.env.PORT}`,
        basePath: '/v1',
        produces: [
            "application/json",
            "application/xml"
        ],
        schemes: ['http', 'https']
    },
    basedir: __dirname, //app absolute path
    files: ['./app/**/*.js', './app/*.js'] //Path to the API handle folder
};

module.exports = options;
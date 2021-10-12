// Require and setup of express
const express = require('express');
const app = express();

// CORS
const cors = require('cors');

// Import swagger options for documentation of the API
const options = require('./rest-app/middlewares/swagger-options');
// dotenv to use the .env file
require('dotenv').config();

// GraphQL config
const { graphqlHTTP } = require('express-graphql');
// GraphQL schemas config
const schema = require('./Schemas');

// Swagger configuration
const expressSwagger = require('express-swagger-generator')(app);
expressSwagger(options);

// Where the routes are defined
// const router = require('./app/router');

const PORT = process.env.PORT || 4444;

app.use(cors({
    // Any page can access our API /!\
    origin: '*'
}));

// MW to use the json data the app will send (USEFUL maybe)
app.use(express.json());

// MW to read correctly request.body (USEFUL maybe)
app.use(express.urlencoded({ extended: true }));

// app.use('/v1', router);

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}.`);
});
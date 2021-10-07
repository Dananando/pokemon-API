// Require and setup of express
const express = require('express');
const app = express();

// dotenv to use the .env file
require('dotenv').config();

// Swagger options
const options = require('./app/middlewares/swagger-options');

// Swagger configuration
const expressSwagger = require('express-swagger-generator')(app);

expressSwagger(options);

// Where the routes are defined
const router = require('./app/router');

const PORT = process.env.PORT || 4444;

// CORS MW
const cors = require('cors');
app.use(cors({
    // Any page can access our API /!\
    origin: '*'
}));

// MW to use the json data the app will send (USEFEUL maybe)
app.use(express.json());

// MW to read correctly request.body (USEFUL maybe)
app.use(express.urlencoded({ extended: true }));

app.use('/v1', router);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}.`);
});
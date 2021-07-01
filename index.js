// Require and setup of express
const express = require('express');
const app = express();

// dotenv to use the .env file
require('dotenv').config();

// Where the routes are defined
const router = require('./app/router');

const PORT = process.env.PORT || 4444;

const { ApolloServer } = require('apollo-server-express');

const database = require('./app/database');

const typeDefs = `
  type Query {
    pokemon(id: Int): Pokemon
  }

  type Pokemon {
    id: Int,
    nom: String,
    pv: Int,
    attaque: Int,
    defense: Int,
    attaque_spe: Int,
    defense_spe: Int,
    vitesse: Int,
    numero: Int
  }
`;

const resolvers = {
    Query: {
        pokemon: async (_, { id }) => {
            try {
                const { rows } = await database.query(`SELECT * FROM pokemon WHERE id = $1`, [id]);
                console.log(rows[0]);
                return rows[0];
            } catch (error) {
                console.trace(error);
            }
        }
    },

    // Pokemon: {

    // }
};

// const typeDefs = require('./app/typedefs');
// const resolvers = require('./app/resolvers');

const server = new ApolloServer({ typeDefs, resolvers })


// MW to use the json data the app will send
app.use(express.json());

// MW to read correctly request.body
app.use(express.urlencoded({ extended: true }));

app.use('/v1', router);

app.listen(PORT, async () => {
    await server.start();

    server.applyMiddleware({ app })
    console.log(`Express running on http://localhost:${PORT}.`)
    console.log(`Appolo server running on http://localhost:${PORT}${server.graphqlPath}.`);
});
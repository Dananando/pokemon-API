// Require and setup of express
const express = require('express');
const app = express();

// CORS
const cors = require('cors');

// Import swagger options for documentation of the API
const options = require('./app/middlewares/swagger-options');

const pokemon = require('./data/pokemon.json');

// dotenv to use the .env file
require('dotenv').config();

// Swagger configuration
const expressSwagger = require('express-swagger-generator')(app);

const graphql = require('graphql');
const { GraphQLObjectType, GraphQLSchema, GraphQLInt, GraphQLString, GraphQLList } = graphql;
const { graphqlHTTP } = require('express-graphql');

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

const PokemonType = new GraphQLObjectType({
    name: 'Pokemon',
    fields: () => ({
        id: { type: GraphQLInt },
        nom: { type: GraphQLString },
        pv: { type: GraphQLInt },
        attaque: { type: GraphQLInt },
        defense: { type: GraphQLInt },
        attaque_spe: { type: GraphQLInt },
        defense_spe: { type: GraphQLInt },
        vitesse: { type: GraphQLInt },
        numero: { type: GraphQLInt }

    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        getAllPokemons: {
            type: new GraphQLList(PokemonType),
            args: { id: { type: GraphQLInt } },
            resolve(parent, args) {
                return pokemon;
            }
        }
    }
});
const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        createPokemon: {
            type: PokemonType,
            args: {
                id: { type: GraphQLInt },
                nom: { type: GraphQLString },
                pv: { type: GraphQLInt },
                attaque: { type: GraphQLInt },
                defense: { type: GraphQLInt },
                attaque_spe: { type: GraphQLInt },
                defense_spe: { type: GraphQLInt },
                vitesse: { type: GraphQLInt },
                numero: { type: GraphQLInt }
            },
            resolve(parent, args) {
                const pokemonLength = pokemon.length-1;
                pokemon.push({
                    id: pokemon[pokemonLength].id+1,
                    nom: args.nom,
                    pv: args.pv,
                    attaque: args.attaque,
                    defense: args.defense,
                    attaque_spe: args.attaque_spe,
                    defense_spe: args.defense_spe,
                    vitesse: args.vitesse,
                    numero: pokemon[pokemonLength].numero+1
                });
                return args;
            }
        }
    }
});

const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}.`);
});
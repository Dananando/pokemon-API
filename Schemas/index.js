const graphql = require('graphql');
const { GraphQLObjectType, GraphQLSchema, GraphQLInt, GraphQLString, GraphQLList } = graphql;
const PokemonType = require('../Schemas/TypeDefs/PokemonType');
const pokemon = require('../data/pokemon.json');

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
                const pokemonLength = pokemon.length - 1;
                pokemon.push({
                    id: pokemon[pokemonLength].id + 1,
                    nom: args.nom,
                    pv: args.pv,
                    attaque: args.attaque,
                    defense: args.defense,
                    attaque_spe: args.attaque_spe,
                    defense_spe: args.defense_spe,
                    vitesse: args.vitesse,
                    numero: pokemon[pokemonLength].numero + 1
                });
                return args;
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});
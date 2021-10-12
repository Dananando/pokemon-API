const graphql = require('graphql');
const { GraphQLObjectType, GraphQLInt, GraphQLString } = graphql;

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

module.exports = PokemonType;
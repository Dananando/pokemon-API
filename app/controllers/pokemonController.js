// From older project - To be corrected
const pokemonDatamapper = require('../dataMappers/pokemonDatamapper');

const pokemonController = {
    async getAll(_, response, next) {
        try {
            const pokemons = await pokemonDatamapper.getAll();
            if (pokemons) {
                response.status(200).json(pokemons);
            } else {
                next();
            }
        } catch (error) {
            console.trace(error);
            throw new Error('Error occurred', { cause: error.message });
        }
    },

    async getOne(request, response, next) {
        const id = Number(request.params.id);
        try {
            const thePokemon = await pokemonDatamapper.getOne(id);
            if (thePokemon) {
                response.status(200).json(thePokemon);
            } else {
                next();
            }
        } catch (error) {
            console.trace(error);
            throw new Error('Error occurred', { cause: error.message });
        }
    },

    async saveOrUpdate(request, response, next) {
        const pokemon = request.body;
        try {
            const savedPokemon = await pokemonDatamapper.saveOrUpdate(pokemon);
            console.log('Saved pokemon: ', savedPokemon);
            if (savedPokemon) {
                response.status(201).json(savedPokemon);
            } else {
                next();
            }
        } catch (error) {
            console.trace(error);
            throw new Error('Error occurred', { cause: error.message });
        }
    },

    async delete(request, response, next) {
        const id = Number(request.params.id);
        try {
            const deletedPokemon = await pokemonDatamapper.delete(id);
            if (deletedPokemon) {
                response.status(204).json(deletedPokemon);
            } else {
                next();
            }
        } catch (error) {
            console.trace(error);
            throw new Error('Error occurred', { cause: error.message });
        }
    }
};

module.exports = pokemonController;
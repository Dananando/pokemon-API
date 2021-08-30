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
        }
    },

    async saveOrUpdate(request, response, next) {
        const author = request.body;
        try {
            const savedAuthor = await authorDatamapper.saveOrUpdate(author);
            console.log('Saved author: ', savedAuthor);
            if (savedAuthor) {
                response.status(201).json(savedAuthor);
            } else {
                next();
            }
        } catch (error) {
            console.trace(error);
            response.status(500).json(error.message);
        }
    },

    async delete(request, response, next) {
        const id = Number(request.params.id);
        try {
            const deletedAuthor = await authorDatamapper.delete(id);
            if (deletedAuthor) {
                response.status(204).json(deletedAuthor);
            } else {
                next();
            }
        } catch (error) {
            console.trace(error);
            throw error;
        }
    }
};

module.exports = pokemonController;
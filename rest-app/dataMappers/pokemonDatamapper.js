// From older project - To be corrected

const database = require('../database');

const pokemonDatamapper = {
    async getAll() {
        const query = {
            text: `SELECT * FROM "pokemon";`
        };

        try {
            const { rows } = await database.query(query);
            // console.log(rows);
            return rows;
        } catch (error) {
            console.trace(error);
            throw new Error('Error occurred', { cause: error.message });
        }
    },

    async getOne(id) {
        const query = {
            text: `SELECT * FROM "pokemon" WHERE id = $1;`,
            values: [id]
        };

        try {
            const { rows } = await database.query(query);
            console.log(rows[0]);
            return rows[0];
        } catch (error) {
            console.trace(error);
            throw error;
        }
    },

    async update(pokemon) {
        const query = {
            text: `UPDATE "pokemon" SET
            nom = $1,
            pv = $2,
            attaque = $3,
            defense = $4,
            attaque_spe = $5,
            defense_spe = $6,
            vitesse WHERE id = $7 RETURNING id;`,
            values: [
                pokemon.nom,
                pokemon.pv,
                pokemon.attaque,
                pokemon.defense,
                pokemon.attaque_spe,
                pokemon.defense_spe,
                pokemon.vitesse,
                pokemon.id]
        };

        try {
            const { rows } = await database.query(query);
            return rows[0];
        } catch (error) {
            throw new Error(error);
        }
    },

    async delete(id) {
        const query = {
            text: `DELETE FROM "pokmon" WHERE id = $1;`,
            values: [id]
        };

        try {
            const { rows } = await database.query(query);
            return rows[0];
        } catch (error) {
            console.trace(error);
            throw error;
        }
    }
};

module.exports = pokemonDatamapper;
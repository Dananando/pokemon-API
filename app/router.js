const { Router } = require('express');
const router = Router();

// Import the controllers to retrieve / modify the relevant datas
const pokemonController = require('./controllers/pokemonController');

// Test page
router.get('/', (_, response) => {
    response.send('It\'s running');
});

// ALL POKEMONS
router.get('/pokemons', pokemonController.getAll);

// One pokemon
router.get('/pokemons/:id', pokemonController.getOne);

// Route 404
router.use((request, response) => {
    response.status(404).json(`Endpoint ${request.url} not found`);
});

module.exports = router;
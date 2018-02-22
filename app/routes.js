const ctrlIndex = require('../public/controllers/index');
const ctrlDecks = require('../public/controllers/decks');
const ctrlCards = require('../public/controllers/cards');
const ctrlPlayers = require('../public/controllers/players');

module.exports = function(app, request) {
    app.get('/', ctrlIndex.index)
    app.get('/decks', ctrlDecks.getDecks)
    app.get('/cards', ctrlCards.getCards)
    app.get('/cards/:cardId', ctrlCards.getOneCard);
    app.get('/players', ctrlPlayers.getPlayers)
}
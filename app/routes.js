const ctrlDecks = require('../public/controllers/decks');

module.exports = function(app, request) {
    app.get('/', ctrlDecks.index)
    app.get('/decks', ctrlDecks.getDecks)
}
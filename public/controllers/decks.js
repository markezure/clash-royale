const config = require('../../app/config');
const trae = require('trae');

module.exports.index = (req, res, next) => {
  res.render('index', {
    pageHeader: {
      title: 'Decks',
      subtitle: 'Build your deck'
    },
    cards: []
  });
}

let baseResponseObject = {
  pageHeader: {
    title: 'Random Deck',
    subtitle: 'Generate a random deck!'
  }
};

module.exports.getDecks = (req, res, next) => {
  trae.get(config.baseURL+'/random-deck')
    .then((cards) => {
      baseResponseObject.cards = cards.data;
      res.render('random-deck', baseResponseObject);
    }).catch((err) => {
      console.error(err);
    });
}
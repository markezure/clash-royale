const config = require('../../app/config');
const trae = require('trae');

let objDecksBase = {
  pageHeader: {
    title: 'Decks de Batalha',
    subtitle: 'Gerador Decks aleatório.'
  }
};

module.exports.getDecks = (req, res, next) => {
  trae.get(config.baseURL+'/random-deck')
    .then((cards) => {
      objDecksBase.cards = cards.data;
      res.render('random-deck', objDecksBase);
    }).catch((err) => {
      console.error(err);
    });
}
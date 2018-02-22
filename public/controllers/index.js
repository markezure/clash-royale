const config = require('../../app/config');
const trae = require('trae');

module.exports.index = (req, res, next) => {
    res.render('index', {
      pageHeader: {
        title: 'Inicio',
        subtitle: 'Clash Royale'
      },
      cards: []
    });
  }
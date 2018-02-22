const config = require('../../app/config');
const trae = require('trae');

module.exports.getCards = (req, res, next) => {
    trae.get(config.baseURL + '/cards')
        .then((response) => {
            res.render('cards', {
                pageHeader: {
                    title: 'Cartas',
                    subtitle: 'Listas de todos as Cartas Clash Royale'
                },
                cards: response.data
            });
        }).catch((err) => {
            console.error(err);
    });
}

module.exports.getOneCard = (req, res, next) => {
    trae.get(config.baseURL + '/cards/' + req.params.cardId)
    .then((response) => {
        res.render('cardOne', {
            card: response.data,
            pageHeader: {
                title: 'Carta: ' + response.data.name,
                subtitle: ''
            }
        });
    });
};
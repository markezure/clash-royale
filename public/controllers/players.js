const config = require('../../app/config');
const trae = require('trae');

module.exports.getPlayers = (req, res, next) => {
    trae.get(config.baseURL + '/players')
        .then((response) => {
            res.render('players', {
                pageHeader: {
                    title: 'Jogadores',
                    subtitle: 'Listas de todos as Jogadores Clash Royale'
                },
                players: response.data
            });
        }).catch((err) => {
            console.error(err);
    });
}
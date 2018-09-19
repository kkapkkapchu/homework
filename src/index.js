/**
 * Created by mohwa on 2018. 4. 19..
 */

require('./sass/app.scss');

const Card = require('./js/card');
const Tournament = require('./js/tournament');

function load() {
    let card = new Card();
    // let cardList = card.getFemaleCards();
    let cardList = card.getMaleCards();

    let tournament = new Tournament(cardList);
    tournament.init();
}

window.onload = load;


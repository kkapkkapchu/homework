class Card {
    constructor() {
        // 카드 데이터
        this._data = require('../data/card.json');
    }

    getMaleCards() {
        return this._data[1].items;
    }

    getFemaleCards() {
        return this._data[0].items;
    }

    /**
     * 전달받은 Array 객체를 무작위로 다시 섞는다.
     */
    shuffle(v = []) {
        let newList = JSON.parse(JSON.stringify(v));
        let r, tmp;
        const length = v.length;

        for (let i = length; --i;) {
            r = Math.floor(Math.random() * i);

            tmp = newList[i - 1];
            newList[i - 1] = newList[r];
            newList[r] = tmp;
        }

        return newList;
    }
}

module.exports = Card;
const Card = require('./card');

class Tournament {
    constructor(cardList, roundNum = 16) {
        this._cardList = new Card().shuffle(cardList);
        this._originCardList = JSON.parse(JSON.stringify(this._cardList));

        this._selectedList = [];    // 매 라운드마다 선택한 결과를 저장하기 위한 이차원 배열
        this._selectedListIndex = 0;

        this._roundNum = roundNum;
        this._currentRoundIndex = 0;
    }

    init() {
        this.setRoundNumText(`${this._roundNum}강`);

        // 16강이면 스테이지는 4번이 된다.(16강 -> 8강 -> 4강 -> 결승)
        let stageNumber = Math.log2(this._roundNum);
        for (let i = 0; i < stageNumber; i++) {
            this._selectedList.push([]);
        }

        this.setCardItem("card1", this._cardList[0]);
        this.setCardItem("card2", this._cardList[1]);
        document.getElementById("winner").className = "hidden";
    }

    /**
     * 현재 진행중인 라운드의 텍스트를 지정합니다.
     */
    setRoundNumText(text) {
        document.getElementById("stage").innerText = text;
    }

    /**
     * 카드의 정보(사진, 이름)를 지정합니다.
     */
    setCardItem(id, item) {
        document.getElementById(`${id}_image`).src = item.photo;
        document.getElementById(`${id}_name`).innerText = item.name;

        if (id !== "winner") {
            document.getElementById(id).onclick = (e) => this.handleClickCard(e, item);
        }
    }

    /**
     * 사용자가 선택한 히스토리를 보여줍니다.
     */
    showHistory() {
        console.log('history', this._selectedList, this._originCardList)

        let divElement = document.createElement("div");
        this._originCardList.forEach(element => {
            let historyElement = document.createElement("div");

            historyElement.setAttribute("class", "history");
            historyElement.innerHTML = `
                <img src=${element.photo} />
                <span class="name">${element.name}</span>
            `;

            divElement.appendChild(historyElement);
        });

        document.getElementById("history").appendChild(divElement);

        for (let i = 0; i < this._selectedList.length; i++) {
            let divElement = document.createElement("div");

            for (let j = 0; j < this._selectedList[i].length; j++) {
                let element = this._selectedList[i][j];
                let historyElement = document.createElement("div");

                historyElement.setAttribute("class", "history");
                historyElement.innerHTML = `
                    <img src=${element.photo} />
                    <span class="name">${element.name}</span>
                `;

                divElement.appendChild(historyElement);
                document.getElementById("history").appendChild(divElement);
            }

            document.getElementById("history").appendChild(document.createElement("br"));
        }

        document.getElementById("result").className = "hidden";
    }

    /**
     * 카드를 클릭할 때 발생하는 함수입니다.
     */
    handleClickCard(e, selectedCard) {
        // 최종 이상형 결정
        if (this._roundNum === 2) {
            let cards = document.getElementById("cards");
            cards.className = 'hidden';

            document.getElementById("winner").className = "card-item winner";
            this.setCardItem("winner", selectedCard);
            this.setRoundNumText(`당신의 이상형은 '${selectedCard.name}' 입니다.`);
            
            this._selectedList[this._selectedListIndex].push(selectedCard);

            let buttonElement = document.createElement("button");
            buttonElement.setAttribute("id", "result");
            buttonElement.innerText = "결과보기";
            buttonElement.onclick = () => this.showHistory();
            document.getElementById("winner").appendChild(buttonElement);

            return;
        }

        // 선택한 결과 저장
        this._selectedList[this._selectedListIndex].push(selectedCard);

        // 16강이면 index 가 14 일 때까지 돌아야 함
        if (this._currentRoundIndex < this._roundNum - 2) {
            // 두 명씩 붙게 되므로 index는 2씩 증가
            this._currentRoundIndex += 2;
        } else {
            // 다음 라운드로 이동
            this._roundNum /= 2;
            this.setRoundNumText(this._roundNum === 2 ? "결승" : `${this._roundNum}강`);

            this._cardList = new Card().shuffle(this._selectedList[this._selectedListIndex]);
            this._selectedListIndex++;

            this._currentRoundIndex = 0;
        }

        this.setCardItem("card1", this._cardList[this._currentRoundIndex]);
        this.setCardItem("card2", this._cardList[this._currentRoundIndex + 1]);
    }
}

module.exports = Tournament;
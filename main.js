(function () {
    var root = document.getElementById('root');
    var turnedCards = [];
    var foundCards = [];
    var canTurnCards = true;
    var tecken = shuffle([
        "Sten", "Punkthöjd", "Höjd",
        "Sänka", "Mosse", "Brant",
        "Sten", "Punkthöjd", "Höjd",
        "Sänka", "Mosse", "Brant",
    ]);

    for (var i = 0; i < 12; i++) {
        var card = document.createElement("div");
        card.className = "card";
        card.setAttribute("data-index", i);
        card.setAttribute("data-tecken", tecken[i]);
        card.addEventListener("click", turnCard);

        // cards.push(card);
        root.appendChild(card);
    }

    function turnCard (event) {
        if (canTurnCards) {
            this.textContent = this.getAttribute("data-tecken");
            turnedCards.push(this);
            if (turnedCards.length > 1) {
                if (turnedCards[0].getAttribute("data-tecken") === turnedCards[1].getAttribute("data-tecken")) {
                    console.log("Found");
                    foundCards.push(turnedCards[0], turnedCards[1]);
                    turnedCards = [];
                } else {
                    canTurnCards = false;
                    setTimeout(function () {
                        turnedCards.map(turnBack);
                        turnedCards = [];
                        canTurnCards = true;
                    }, 3000);
                }
            }
        }
    }

    function turnBack(card) {
        card.textContent = "";
    }

    function shuffle(a) {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    }
})();

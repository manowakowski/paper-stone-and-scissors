const gameSummary = {
    number: 0,
    wins: 0,
    losses: 0,
    draws: 0,
}

const game = {
    playerHand: "",
    aiHand: "",
}

const hands = [...document.querySelectorAll('.select img')];


function aiChoise(){
    const aiHand = hands[Math.floor(Math.random()*3)]
    return aiHand;
}


function handSelection() {
    game.playerHand = this.dataset.options;
    hands.forEach(hand => hand.style.boxShadow = "");
    this.style.boxShadow = ('0 0 0 4px yellow');
}

function startGame() {
    if (!game.playerHand) {
        return console.log('wybierz dłoń')
    }

    game.aiHand = aiChoice()

}





document.querySelector('.start').addEventListener('click', startGame);
hands.forEach(hand => hand.addEventListener('click', handSelection))
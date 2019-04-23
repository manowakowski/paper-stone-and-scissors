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





function handSelection() {
    game.playerHand = this.dataset.option
    console.log(game.playerHand);
    hands.forEach(hand => hand.style.boxShadow = "");
    this.style.boxShadow = '0 0 0 4px yellow';
}



function aiChoise(){
    return hands[Math.floor(Math.random()*3)].dataset.option;
}



function checkResult (player, ai){
    console.log(player, ai);
    if (player === ai) {
        return "draw";
    } else if ((player ==="papier" && ai === "kamień") || (player === "kamień" && ai ==="nożyczki") || (player ==="nożyczki" && ai === "papier")) {
        return 'win';
    } else { return 'loss';}

}


function publishResult(player, ai, result) {
    document.querySelector('[data-summary="your-choice"]').textContent = player;
    document.querySelector('[data-summary="ai-choice"]').textContent = ai;
    document.querySelector('p.numbers span').textContent = ++gameSummary.number;

    if (result === "win" ) {
        document.querySelector('[data-summary="who-win"]').textContent = "Zwycieżyłeś!!"
        document.querySelector('[data-summary="who-win"]').style.color = "green";
        document.querySelector('p.wins span').textContent = ++gameSummary.wins;
    } else if (result === "loss") {
        document.querySelector('[data-summary="who-win"]').textContent = "Komputer Zwyciężył!!"
        document.querySelector('[data-summary="who-win"]').style.color = "red";
        document.querySelector('p.losses span').textContent = ++gameSummary.losses;
    } else {
        document.querySelector('[data-summary="who-win"]').textContent = "Remisiak"
        document.querySelector('[data-summary="who-win"]').style.color = "grey";
        document.querySelector('p.draws span').textContent = ++gameSummary.draws;
    }
    
   
}    

function startGame() {
    if (!game.playerHand) {
        return console.log('wybierz dłoń');
    }
    game.aiHand = aiChoise();
    const gameResult = checkResult(game.playerHand, game.aiHand);
    publishResult(game.playerHand, game.aiHand, gameResult)
    
}



hands.forEach(hand => hand.addEventListener('click', handSelection))
document.querySelector('.start').addEventListener('click', startGame)

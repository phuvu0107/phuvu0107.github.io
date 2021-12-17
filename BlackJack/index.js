//Initiate
let player = {
    name: "",
    chips: 0,
    bet: 0
}
let cards = []
let sum = 0
let hostSum = 0
let hasBlackjack = false
let isAlive = false
let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let usernameEl = document.getElementById("username-el")
let chipsEl = document.getElementById("chips-el")
let hostSumEl = document.getElementById("hostSum-el")

//functions

//create random card
function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

//start game
function startGame(){
    if (player.name == "" && player.chips === 0){
        player.name = prompt("Enter your user name:")
        usernameEl.textContent += player.name;
        player.chips = Number(prompt("How much do you bring today?"))
        chipsEl.textContent += "$" + player.chips.toString()
    }
    player.bet = Number(prompt("How much do you want to bet?"))
    if(player.bet > player.chips){
        alert("Your bet is beyond the chips you own! Press OK to if you want to take this risk!!")
    }

    if (cards.length === 0){
        isAlive = true;
        let firstCard = getRandomCard();
        let secondCard = getRandomCard();
        cards.push(firstCard);
        cards.push(secondCard);
        sum = firstCard + secondCard;
        renderGame();
    } else {
        messageEl.textContent = "The game is started! To start a new game, press NEW GAME!"
    }
}

//render game
function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        player.chips += player.bet
        chipsEl.textContent = "Chips: $" + player.chips
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        player.chips -= player.bet
        chipsEl.textContent = "Chips: $" + player.chips
        isAlive = false
    }
    messageEl.textContent = message
}

//new card
function newCard() {
    if (cards.length === 0){
        messageEl.textContent = "The game is not started yet! Start the game to draw!"
    } else{
        if (isAlive === true && hasBlackjack === false) {
            let card = getRandomCard()
            sum += card
            cards.push(card)
            renderGame()        
        } else{
            messageEl.textContent = "You lost! Press NEW GAME to retry!"
        }
    }
    
}

//new game
function newGame() {
    cards = []
    sum = 0
    hasBlackjack = false
    isAlive = false
    player.bet = 0
    hostSum = 0
    messageEl.textContent = "Press START to play!"
    cardsEl.textContent = "Cards:"
    sumEl.textContent = "Sum: "
    hostSumEl.textContent = "Host's sum: "
}

//stand
function stand(){
    if (sum >= 16){
        hostSum = Math.floor(Math.random()*(21-15) + 15)
        hostSumEl.textContent += hostSum
        if (sum < hostSum){
            messageEl.textContent = "You lost your bet!"
            player.chips -= player.bet
            chipsEl.textContent = "Chips: $" + player.chips
        } else {
            messageEl.textContent = "Congrats!!! You just won"
            player.chips += player.bet
            chipsEl.textContent = "Chips: $" + player.chips
        }
    } else {
        messageEl.textContent = "You need to be at least 16 to stand! Draw another card!"
    }
   
}

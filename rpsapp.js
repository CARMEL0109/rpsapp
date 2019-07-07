var hands=["rock", "paper", "scissors"];
console.log(hands);

var getHand=() => {
    return parseInt(Math.random() *10)%3;
}
// console.log(getHand());

var playerOne={
    name: "John",
    score: 0,
}

var playerTwo={
    name: "JohnApril",
    score: 0,
}
// console.log(hands[getHand()])

var playRound=(a,b) =>{
    playerOne.hand = hands[getHand()]
    playerTwo.hand = hands[getHand()]
    // console.log(hands[getHand()])
// rock > scissors
// scissor > paper
// paper > rock
let h1 = a.hand;
let h2 = b.hand;

    if (a.hand === b.hand){
        console.log("it's a tie, hands: ", h1, h2)
    }
    else if (h1 === 'scissors' && h2 === 'paper' || h1 === 'rock' && h2 === 'scissors' || h1 === 'paper' && h2 == 'rock'){
        console.log("player 1 wins : ", h1, h2)
    } else {
        console.log('player 2 wins: ', h1, h2)
    }
 
}

// playRound(playerOne, playerTwo);
console.log(playerOne.hand === 'scissors', playerOne.hand);
console.log(playerOne.name);

var playGame=(p1, p2, playUntil) => {
    for(var i=0; i<playUntil; i++) {
     playRound(p1, p2);
        
    }
}
playGame(playerOne,playerTwo, 5);   
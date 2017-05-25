/*

Card Game of War Exercise Part 1.

*/

let suits = ['hearts', 'clubs', 'spades', 'diamonds']
let ranks = ['ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king']

/*

Given the above suits and ranks array, write a function called
createDeck that will take both as parameters and return a new array
with all 52 possible card combinations. The returned 'Deck of Cards'
shoulkd be an array with 52 strings in it, each representing a card
(i.e. 'ace of Hearts')

Call createDeck and save the result into a variable called
deckOfCards.

*/
let deckOfCards = [];
function createDeck(cardA, cardB) {
    for (let x=0; x<=ranks.length-1; x++){
        for (let y=0; y<=suits.length-1; y++){
            deckOfCards.push(cardA[x] + "-" + cardB[y]);
        }
    }
    return deckOfCards;
    
}
console.log("All 52 deck of cards: "+createDeck(ranks, suits));
console.log("deckOfCards Count: "+deckOfCards.length);
    console.log("----------------------------------------------------------------------------------");
    console.log("----------------------------------------------------------------------------------");   

/*

Write a function called getRandomCard that will return one random
card from deckOfCards whenever it is called.

Don't worry about removing the card from deckOfCards.

*/

function getRandomCard(){
    let randomCard = Math.round(Math.random()*52);
    return deckOfCards[randomCard-1];
}

console.log("Get random cards: "+getRandomCard());
    console.log("----------------------------------------------------------------------------------");
    console.log("----------------------------------------------------------------------------------");   
/*

Write a function called dealHand that takes a number as it's only
parameter. This number represents the number of cards that dealHand
should return.

If no number is passed in, then dealHand should still return one
card. If dealHand is only returning one card, it returns that card
as a string; if dealHand is returning more than one card, it returns
the cards as an array.

*/

function dealHand( urNum ){
    if (urNum.length===0){
        console.log("dealHand: "+getRandomCard());
    }else {
        for (let x=0; x<=urNum-1; x++){
            console.log("Dealing Hand-Card "+(x+1)+": "+getRandomCard());
        }
    }
    console.log("----------------------------------------------------------------------------------");
    console.log("----------------------------------------------------------------------------------");    
}
dealHand(3);
    console.log("----------------------------------------------------------------------------------");
    console.log("----------------------------------------------------------------------------------");   
/*

Create two letiables, playerOneCards and playerTwoCards, and
initialize them as empty arrays.

Deal both playerOneCards and playerTwoCards 7 cards each.

*/
let playerOneCards = [];
let playerTwoCards = new Array();

for (let i=0; i<=6; i++){
    playerOneCards.push(getRandomCard());
    playerTwoCards.push(getRandomCard());
}
console.log("Player 1 cards: "+playerOneCards);
console.log("Player 2 cards: "+playerTwoCards);
    console.log("----------------------------------------------------------------------------------");
    console.log("----------------------------------------------------------------------------------");   
/*

Write a function called showHand that takes a player's cards as an
array and prints each card.

*/

function showHand( playCards ){
    for (let z=0; z<=playCards.length-1; z++){
        console.log("Printng players cards "+(z+1)+": "+playCards[z]);
    }
}

showHand(playerOneCards);

/*

Get pumped:
Next class we're going to talk about objects, which will let us
create cards that are easier to use because they contain attributes
like suit and rank. Then, we'll be able to take two random cards and
compare their score with each other!
*/
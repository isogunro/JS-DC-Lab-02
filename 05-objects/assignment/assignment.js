/*

Card Game of War Exercise Part 2.

*/

const suits = ['hearts', 'clubs', 'spades', 'diamonds']
const ranks = ['ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king']
const rankScores = { ace: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10, jack: 11, king: 12, queen: 13 }

console.log("rankScores: "+Object.keys(rankScores))
/*let rankSuit = Math.ceil(Math.random()*suits.length-1)
console.log(rankSuit + " " + suits[rankSuit])
let rank = Math.ceil(Math.random()*ranks.length-1) 
console.log(rank +" - "+ranks[rank])


Card Scores: ace: 1, two: 2, three: 3, four: 4, ... jack: 11, king: 12, queen: 13

*/


/*

Create class modelling a card. Each card should have a suit, rank and
score as well as a title. The title should be a string descriptor for 
the card, like 'Ace of Hearts' or 'Four of Clubs'

Test out your class by creating a new card, `console.log`ing it to 
make sure you're getting what you expect. You should get something like:
{
  suit: 'hearts',
  rank: 'ace',
  title: 'ace of hearts',
  score: 1
}
*/

class playingCard {
	
		constructor(suits, ranks, rankScores){
		this.suits = suits,
		this.ranks = ranks,
		this.rankScores = rankScores
	}	

	/*displayCard() {
		const card = `{
						suit:  ${this.suits},
						rank:  ${this.ranks},
						title: ${this.ranks} of ${this.suits},
						score: ${this.rankScores}
					  }`
		return card
	}*/
	getRankScores(){
		//build function
	}

	generateRandomCard(){
		let rankSuitIndx = Math.round(Math.random() * this.suits.length)
		let rankIndx = Math.round(Math.random() * this.ranks.length)
		let rankScores = this.getRankScores()
		/*const card = `{
						suit:  ${suits[rankSuitIndx]},
						rank:  ${ranks[rankIndx]},
						title: ${ranks[rankIndx]} of ${suits[rankSuitIndx]},
						score: ${rankScores}
					  }`*/

		const card = {
			suit: suits[ rankSuitIndx ],
			rank: ranks[ rankIndx ],
			title: ranks[ rankIndx ] + " of " + suits[ rankSuitIndx ],
			score: rankScores
		}
		return card		
		//return this.rank + " of " + this.rankSuit 
	}
}

const myCard = new playingCard(suits[2], ranks[2], rankScores.three)
console.log(myCard)
console.log(myCard.generateRandomCard())

/*
Write a class for a deck of cards. The deck should contain a property 
`cards` that is an array of the cards in the current deck.

Your deck should contain a method called `createNewDeck` that will 
populate the `cards` array with all 52 card posibilities, using your 
card object from above. Someone should not be able to create a new 
deck of 52 cards if the deck's `cards` array already has cards in it

*/
	class deckOfcards {

		constructor() {
			this.cards = []
		}

		createNewDeck(){						
	    	for (let x=0; x<suits.length-1; x++){
	        	for (let y=0; y<ranks.length-1; y++){
	            	this.cards.push(ranks[y] + " of " + suits[x]);
	        	}
	        }
    		return this.cards;    
		}

		checkDeck(){
			if (this.cards > 0){
				console.log("Deck has been populated.")

				return true
			}
		}

	}

	let newCards = new deckOfcards()	
	//console.log(duplicateCards)


	if (newCards.length === 0){		
		let newCards = new deckOfcards()
		let duplicateCards = newCards.createNewDeck()
	}

	let newCards2 = new deckOfcards()
	

	/*
	if (newCards.checkDeck()){
		console.log(newCards.checkDeck())
	}
	else{
		console.log(newCards.createNewDeck())	
	}

	if (duplicateCards.checkDeck()){
		console.log(duplicateCards.checkDeck())
	}
	else{
		console.log(duplicateCards.createNewDeck())	
	}	
	
*/

/*

Write a class called Player. A player should have a username that is 
a string and a hand that is an array of cards.

Instantiate two instances of your player class.

*/
 class Player {
 	constructor(uName, cards){
 		this.username = uName,
 		this.cards = cards
 	}
 }

/*let player1 = new Player("jDoe",cards)
let player2 = new Player("jnDoe",cards)



Get pumped:
For our lab, we're going to have two mini lessons: one on `npm`, which 
stands for node package manager and installing 3rd party libraries,
perhaps to help us handle user input; the second will be on breaking 
our program into multiple files.

After that, we'll finish building out the game and you'll actually be 
able to play it!

*/

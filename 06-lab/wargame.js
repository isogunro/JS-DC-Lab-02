const suits = ['hearts', 'clubs', 'spades', 'diamonds']
const ranks = ['ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king']
const rankScores = { ace: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10, jack: 11, king: 12, queen: 13 }
let playingDeck = []

function playingCard(){
	let cardDeck = []
	for (let x=0; x<=suits.length-1; x++){
		for (let y=0; y<=ranks.length-1; y++){
			cardDeck.push(ranks[y] + " of " + suits[x]);
		}
	}	
	return cardDeck
}

playingDeck = playingCard()

//console.log(playingDeck)
console.log("Playing Card: "+playingDeck.length)

class Player {
	constructor(userName, myCard) {
		this.user = userName,
		this.playerHand = myCard
		/*tempryHand: tempHand,
		allCards: allMyCards
		*/
	}

	playCard(){
		let randCard = Math.round(Math.random()*52)
		this.removeMyCard(randCard)
		console.log("Player Hand: "+this.playerHand)
		return this.playerHand[randCard]
	}
//keep track of number of cards
	removeMyCard(rndCD){
		this.playerHand.splice(rndCD,1)
	}

	addToMyCard(){

	}
}

class Deck {
	constructor(){
		this.cardDeck = playingDeck
	}

	dealCard(){
		console.log("Dealer length: "+this.cardDeck.length)
	 let pick = Math.round(Math.random()*this.cardDeck.length)
	 let dealerPick = this.cardDeck[pick]
	 this.cardDeck.splice(pick, 1)
	 //console.log("---"+this.cardDeck+"---")
	 //console.log("cards: "+this.cardDeck.length)
	 console.log("dealerPic: "+dealerPick)
	 return dealerPick
	}
}

console.log("Player 1, please provide your username.")
let user1 = process.argv
console.log("Player 1, please provide your username.")
let user2 = process.argv

// Get deck of cards to deal to each player
let Dealer = new Deck()

let alternate=0

let user1Cards = []
let user2Cards = []

for (let x=0; x<playingDeck.length; x++){
	if(alternate===0){
		console.log("X1: "+x)
		user1Cards[x] = Dealer.dealCard()		
		alternate = 1
	}
	else {
		console.log("X2: "+x)
		user2Cards[x] = Dealer.dealCard()
		alternate = 0
	}
	//console.log(Dealer.dealCard())
}
console.log("user1cards: "+user1Cards.length)
console.log("user2cards: "+user2Cards.length)
console.log("------------------------------------------------")
console.log("user1cards: "+user1Cards)
console.log("user2cards: "+user2Cards)
let player1 = new Player(user1, user1Cards)
let player2 = new Player(user2, user2Cards)

console.log("Player 1: "+player1.playCard())
console.log("Player 2: "+player2.playCard())
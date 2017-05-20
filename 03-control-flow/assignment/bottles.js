/*
99 bottles of beer on the wall, 99 bottles of beer.
Take one down and pass it around, 98 bottles of beer on the wall.
*/

// A `do while` loop
// var i = 0
// do {
//   console.log( i )
//   i++
// } while ( i < 0 );

let x = 99
do {
	//console.log( x )
	let y=x-1
	if (x!==1) {
		console.log(" ")
		console.log(x+" bottles of beer on the wall, "+x+" bottles of beer.")
		if (x===2) {
		console.log("Take one down and pass it around, 1 bottle of beer on the wall")
	}else {
		console.log("Take one down and pass it around, "+y+" bottles of beer on the wall")
	}
	}

	if (x==1){
		console.log(" ")
		console.log("1 bottle of beer on the wall, 1 bottle of beer.")
		console.log("Take one down and pass it around, no more bottles of beer on the wall.")
	}
	if (x-1==0){
		console.log(" ")
		console.log("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.")
	}
	x--
} while(x >= 1)



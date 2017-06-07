/*

This homework exercise will walk you through the steps to build a table of contents for the article in index.html.

The required part of this assignment is to generate a static table of contents. The bonus, if you have time, 
is to make it dynamic, so that each item in the table of contents links to the corresponding paragraph of 
text in the article body.

Before you get started, you should familiarize yourself with the HTML document that you'll be working with

*/
let html=document.querySelector('html')
console.log(html)
console.dir(html)

/*

Get the DOM nodes for the table of contents and the article body and save them both as variables

*/
let articleBody = document.getElementById("article-body")
let toc = document.querySelector("#table-of-contents")

/*

get an array of every heading in the document and store them in a variable called documentHeadings

*/
let documentHeadings = document.querySelectorAll('.heading')
console.log("-------------------------documentHeadings------------------------------")
console.log(documentHeadings)

console.dir(documentHeadings)

/*

To generate our table of contents we need to do a couple of things:

1. We need to loop through our documentHeadings array
2. Inside our loop, we need to clone the curent element from the documentHeadings array and 
append it to the table of contents element
*/
console.log("-------------------------documentHeadings LOOP------------------------------")
let cloneHeading=[]
for ( let x=0; x<=documentHeadings.length-1; x++){
	
	//Clone heading node and store in another array, set attribute
	cloneHeading[x] = documentHeadings[x].cloneNode(true)	
	cloneHeading[x].setAttribute('id', 'HeadingID_'+x)

	//Build and set the link
	let headingLink = document.createElement('a') // creates a new element (in memory)	
	headingLink.href = "/" // sets the href property of the <a> element
	headingLink.id = 'HeadingID_'+x // sets the ID property
	headingLink.textContent = toc.appendChild(cloneHeading[x]) 
	console.log(headingLink)
}

console.log(toc)
console.dir(toc)

/*

Bonus, make each item of the ToC a link to that heading on the page.

*/

/*

1. Modify each heading on the page so that it has a unique id (or figure out a way to make this part of your loop in part 2! Bonus bonus!)

*/



/*

While looping through each item in your documentHeadings array:
1. create an <a> element
2. give it an href attribute that is the same as the ID of the current documentHeading
3. then append it to the table of contents element

hint: you want what you insert to look something like this:

<a href="#firstHeading"><h1>Lorem ipsum dolor sit amet</h1></a>

*/

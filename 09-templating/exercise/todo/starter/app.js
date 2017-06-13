let myTodoApp = document.querySelector("#app");
let myTodoForm = document.querySelector("#form");
let myButton = document.getElementById("submit");

let todo = {
	item: []
}

function generateView() {
 //1.Get the template source from the DOM
 let source = document.querySelector('#todo-template');
 //profileTemplate will be a function that we call
 
 //2. Compile the template source into a template *function*
 let profileTemplate = Handlebars.compile( source.innerHTML );
 //returns final mark up with interpolation
 
 //3. call our template function, passing in data to render the template with
 let renderedTemplate = profileTemplate( todo );
 
 //4. Add our rendered HTML to the page
 document.querySelector('#app').innerHTML = renderedTemplate;
 
}

//Listen for the submit event on the form
myTodoForm.addEventListener('submit', function( e ) {	
	e.preventDefault();
	
let myTextBox = document.querySelector("#newToDo");

//Another option to get value so you don't have to go back to the dom
//let myTextBox = e.target.querySelector('input');
	todo.item.push(myTextBox.value);
	//myTodoApp.appendChild(todo.item);
	myTextBox.value='';

	generateView();
})
//Anyting from the DOM will return a string

/*if (e.target.tagName=== 'BUTTON'){
		let incrementer = parseInt(event.target.dataset.incrementer, 10)
		counterIndex += incrementer
		title.innerText = `Counter: ${ counterIndex }`
	}
})	*/
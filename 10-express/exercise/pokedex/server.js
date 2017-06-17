const express = require('express')

const poky = require('express-handlebars')
const app = express()

//tells express we want to use a plugin
app.engine('handlebars', poky({ defaultLayout: 'main' }))

app.get('/', function( req, res) {
		res.send("Pokemon Test");
})


app.set('view engine', 'handlebars')

app.get('/', function( req, res ) {
	res.render('home', {'title': 'Test'});
})
app.listen(3000, function() {
		Console.log('listening')
})
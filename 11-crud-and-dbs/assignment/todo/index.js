const express = require('express')
const hbs = require('express-handlebars')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()

app.engine('handlebars', hbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

mongoose.connect('mongodb://isogunro:remlib45#@cluster0-shard-00-00-yng8g.mongodb.net:27017,cluster0-shard-00-01-yng8g.mongodb.net:27017,cluster0-shard-00-02-yng8g.mongodb.net:27017/<DATABASE>?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin')

const itemEntry = require('./models/toDoEntry.js')
//console.log(itemEntry)




app.use(bodyParser.urlencoded({
	extended:true
}))

app.get('/', function( req, res ) {
	itemEntry.find({}, function( err, itemEntries ) {
		//console.log(itemEntries)
			res.render('todoList', {itemEntries})
	})
})

app.get('/newtodo', function( req, res ) {
	res.render('newtodo')
})

app.post('/', function( req, res ){

	console.log(req.body)
	const currentEntry = new itemEntry({
		Item: req.body.Item
	})
	currentEntry.save()
	
	res.redirect('/')
})

app.listen( 3000, function() {
  console.log( 'Todo is up and running!' )
})
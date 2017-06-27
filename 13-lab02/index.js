let express = require("express")
let hbs = require("express-handlebars")
let bodyParser = require("body-parser")
let mongoose = require("mongoose")

/*require("jsdom").env("", function(err, window) {
    if (err) {
        console.error(err);
        return;
    }
 
    var $ = require("jquery")(window);
});
*/

let app = express()

mongoose.connect('mongodb://isogunro:remlib45#@cluster0-shard-00-00-yng8g.mongodb.net:27017,cluster0-shard-00-01-yng8g.mongodb.net:27017,cluster0-shard-00-02-yng8g.mongodb.net:27017/artistscollection?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin')

let Artist = require('./models/Artist.js')

app.use(express.static('public'))
app.engine('handlebars', hbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

//app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}))

app.get('/artist', ( req, res ) => {
	res.render('artist')
})
app.get('/', ( req, res ) => {
	//index route
	//list every artist
	Artist.find({}, ( err, artists ) => {
		res.render('home', {artists: artists})	
	})
})

app.get('/artist/new', ( req, res ) => {
	//new
	//render template for creating a new article

	res.render('new')
})
app.post('/artist/new', ( req, res ) => {
	let newArtist = new Artist({
		name: req.body.name,
		albums: req.body.album,
		songs: req.body.song
	})

	newArtist.save()
	res.redirect('/')
})

app.get('/artist/:id', ( req, res ) => {
  Artist.findOne({ '_id': req.params.id }, ( err, Artist ) => {
    console.log( Artist )
    res.render('artist', Artist)
  })
})

app.listen(3000)
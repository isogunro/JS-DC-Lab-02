//Build out model for Artist
let mongoose = require('mongoose')
let Schema = mongoose.Schema

//Schema for an article
let ArtistSchema = new Schema({
	name: String,
	albums: Array,
	songs: String
})


//turn it into a model
//Will have all the properties and methods that application will need
//ex: Article.find or Article.update
let Artist = mongoose.model( 'Artist', ArtistSchema )


module.exports = Artist
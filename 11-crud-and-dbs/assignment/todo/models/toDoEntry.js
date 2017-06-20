var mongoose = require('mongoose')
var Schema = mongoose.Schema

var entrySchema = new Schema({
  Item: String
})

var itemEntry = mongoose.model('itemEntry', entrySchema)

//Check if it works
/*var myItem = new itemEntry({
	item: 'Clean the car'
})

//Saves it into the database
myItem.save()
*/
module.exports = itemEntry



const mongoose = require('mongoose')
const Schema = mongoose.Schema

const toDoSchema = new Schema({
  title: String,
  content: String,
  completed: Boolean
})

const ToDo = mongoose.model('ToDo', toDoSchema)

module.exports = ToDo

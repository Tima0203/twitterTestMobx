var mongoose = require('mongoose')
var Schema = mongoose.Schema

let TweetsSchema = new Schema({
    title: String,
    text: String
})

export default TweetsSchema

const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/Authors');

var AuthorSchema = new mongoose.Schema({
    name :{ type :String, minlength:3, required: true},
    quotes :{type :Array, required: true},
},{timestamps: true });

mongoose.model('Author', AuthorSchema);
var Author = mongoose.model('Author')

module.exports = Author;
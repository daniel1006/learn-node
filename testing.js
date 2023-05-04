const mongoose = require('mongoose');

mongoose.
connect('mongodb+srv://daniellanthier2:3XmThZeWsPNGzWP3@cluster0.vhpcoay.mongodb.net/Node-API?retryWrites=true&w=majority')
.then(() => { // used because connect is a promise
    console.log('database connectd sir!')
}).catch((error) => { // used because connect is a promise
    console.log(error)
})

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  release: Date,
  tags: [String],
  date: {type: Date, default: Date.now}, 
  isPublished: Boolean
});

const Book = mongoose.model('books', bookSchema);

module.exports = Book;



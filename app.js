const express = require('express'); 
const app = express(); 
// const Book = require('./testing');
const mongoose = require('mongoose');
app.use(express.json()); 


mongoose.
connect('mongodb+srv://daniellanthier2:3XmThZeWsPNGzWP3@cluster0.vhpcoay.mongodb.net/Node-API?retryWrites=true&w=majority')
.then(() => { // used because connect is a promise
    console.log('database connectd sir!')
}).catch((error) => { // used because connect is a promise
    console.log(error)
})

// Connect to MongoDB
//mongoose.connect('mongodb://localhost/', { useNewUrlParser: true, useUnifiedTopology: true });

// Model
const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  release: Date,
  tags: [String],
  date: {type: Date, default: Date.now}, 
  isPublished: Boolean
});

const Book = mongoose.model('books', bookSchema);

// Define a Mongoose schema
async function createBook() {
  const newbook = new Book({
    title: 'Hamnet',
    author: "O'Farrel",
    release: '2019',
    tags: ['fiction', 'historical', 'shakespear', '14th century'],
    isPublished: true,
  });

const result = await newbook.save();
console.log('model saved to mongoose!'); 
}

createBook();


// Set up an Express route to retrieve all documents in the MyModel collection
async function getBook() {
  const book = await Book.find(); // The find method is what retrieves the documents.
  console.log(book);
}

getBook();

const port  = process.env.PORT || 3000;
app.listen(port, () => console.log(port)); 




/* 

async function createBook() {
  const book = new Book({
    title: 'Hamnet',
    author: "O'Farrel",
    release: '2019',
    tags: ['fiction', 'historical', 'shakespear', '14th century'],
    isPublished: true,
  });

const result = await book.save();
console.log(result); 
}

createBook();

app.post('/books', (req, res) => {
    res.send(req.body)
    console.log(req.body)
})

*/
   


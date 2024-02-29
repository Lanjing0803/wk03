const express = require('express');
const router = express.Router();
const Book = require('../models/book');
const Author = require('../models/author');
const Genre = require('../models/genre');

router.get('/', function(req, res, next) {
  const books = Book.all
  res.render('books/index', { title: 'BookedIn || Books', books: books });
});
router.get('/form', async (req, res, next) => {
  res.render('books/form', { title: 'BookedIn || books', authors: Author.all, genres: Genre.all });
});


router.post('/upsert', async (req, res, next) => {
  console.log('body: ' + JSON.stringify(req.body));
  Book.upsert(req.body);
  res.redirect(303, '/books');
});

router.get('/edit', async (req, res, next) => {
  let bookIndex = req.query.id;
  let book = Book.get(bookIndex);
  res.render('books/form', { title: 'BookedIn || Books', book: book,bookIndex: bookIndex, authors: Author.all, genres: Genre.all });
});


router.get('/show/:id', async (req, res, next) => {
  
  let templateVars = {
    title: 'BookedIn || Books',
    book: Book.get(req.params.id)
  }
 

  if (templateVars.book.authorIds) {
    templateVars['authors'] = templateVars.book.authorIds.map((authorId) => Author.get(authorId))
  }

  if (templateVars.book.genreId) {
    templateVars['genre'] = Genre.get(templateVars.book.genreId);
  }
  res.render('books/show', templateVars);

  
});

module.exports = router;
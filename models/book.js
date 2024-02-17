const books = [
    {title: "Leviathan Wakes", year: "2011", authorId: "0", genreId: "0"},
    {title: "Convergence", year: "2022", authorId: "1", genreId: "0"},
    {title: "The Wandering Earth", year: "2000", authorId: "2", genreId: "0"},
  ]
  
  exports.all = books
  exports.add = (book) => {
    books.push(book);
  }
  
  exports.get = (idx) => {
    return books[idx];
  }

  exports.upsert = (book) => {
    if (book.id) {
      exports.update(book);
    } else {
      exports.add(book);
    }
  }
  exports.update = (book) => {
    books[book.id] = book;
  }
const books = [
    {title: "Leviathan Wakes", year: "2011", authorIds: ["0","1"], genreId: "0"},
    {title: "Convergence", year: "2022", authorIds: ["1"], genreId: "0"},
    {title: "The Wandering Earth", year: "2000", authorIds: ["2"], genreId: "0"},
  ]
  
  exports.all = books
  exports.add = (book) => {
    books.push(book);
  }
  
  exports.get = (idx) => {
    return books[idx];
  }

 exports.upsert = (book) => {
    if (book.authorIds && ! Array.isArray(book.authorIds)) {
      book.authorIds = [book.authorIds];
    }
    if (book.id) {
      exports.update(book);
    } else {
      exports.add(book);
    }
  }

  
  exports.update = (book) => {
    books[book.id] = book;
  }
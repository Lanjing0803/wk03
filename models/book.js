const books = [
    {title: "Leviathan Wakes", year: "2011"},
    {title: "Convergence", year: "2022"},
    {title: "The Wandering Earth", year: "2000"},
  ]
  
  exports.all = books
  exports.add = (book) => {
    books.push(book);
  }
  
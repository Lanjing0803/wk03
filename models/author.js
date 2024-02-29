const authors = [
    {firstName: "James", lastName: "S. A. Corey", bookId: "0"},
    {firstName: "Craig", lastName: "Alanson", bookId: "1"},
    {firstName: "Cixin", lastName: "Liu", bookId: "2"},
  ]
  
  exports.all = authors
  exports.add = (author) => {
    authors.push(author);
  }
  exports.get = (idx) => {
    return authors[idx];
  }

  exports.upsert = (author) => {
    if (author.id) {
      exports.update(author);
    } else {
      exports.add(author);
    }
  }
  exports.update = (author) => {
    authors[author.id] = author;
  }
    
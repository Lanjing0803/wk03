exports.get = (bookId, userEmail) => {
    return books_users.find((book_user) => {
      return book_user.bookId == bookId && book_user.userEmail == userEmail;
    });
  }
  
  exports.AllForUser = (userEmail) => {
    return books_users.filter((book_user) => {
      return book_user.userEmail == userEmail;
    });
  }
  
  
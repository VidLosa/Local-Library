function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id)
}

function findBookById(books, id) {
  return books.find((book) => book.id === id)
}

function partitionBooksByBorrowedStatus(books) {
  const borrowed = books.filter((book) => book.borrows[0].returned === false)
  const returned = books.filter((book) => book.borrows[0].returned === true)

  return [borrowed, returned]
}

function getBorrowersForBook(book, accounts) {
  const borrow = book.borrows
  let result = []
  
  for(let idx = 0; idx < borrow.length; idx++){
    const account = accounts.find((acc) => acc.id === borrow[idx].id)
    account.returned = borrow[idx].returned
    result.push(account)
  }
  return result.splice(0 , 10)
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};

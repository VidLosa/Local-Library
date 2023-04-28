function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id)
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((accountA, accountB) => 
  accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1)
}

function getTotalNumberOfBorrows(account, books) {
  let result = 0
  books.forEach((book) => book.borrows.forEach((borrow) => 
  borrow.id === account.id ? result++ : null))
  return result
}

function getBooksPossessedByAccount(account, books, authors) {
  const accountId = account.id;
  
  return books.filter((book) => {
    const recentBorrow = book.borrows[0];
    return (
      recentBorrow.id === accountId && 
      !recentBorrow.returned
    );
  }).map((book) => {
    const author = authors.find((author) => author.id === book.authorId);
    return { ...book, author };
  });
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};

// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function findAuthorById(authors, id) {
  let authorWithId = authors.find((author)=> author.id === id);
  return authorWithId
}

function findBookById(books, id) {
let bookId = books.find((book)=> book.id===id) ;
return bookId; 
}

function partitionBooksByBorrowedStatus(books) {
  let result= [];
  let booksOut= books.filter((book) => book.borrows[0].returned === false );
  let bookIn= books.filter((book) => book.borrows[0].returned === true );
  result.push(booksOut);
  result.push(bookIn);
  return result
}

function getBorrowersForBook(book, accounts) {
  const borrowArray = book.borrows ;
  let result=[]; 
  for (i=0 ; i < borrowArray.length ; i++ ){
    let borrowerId= borrowArray[i].id;
    let returnedStatus= borrowArray[i].returned;
    let verifyId= accounts.find((account)=> account.id === borrowerId);
    if (verifyId) {
        verifyId.returned = returnedStatus ;
        result.push(verifyId)
    }
  } return result.slice(0,10)
};

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};

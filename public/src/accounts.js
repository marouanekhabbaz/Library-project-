// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function findAccountById(accounts, id) {

  let finder=accounts.find((account)=> account.id === id);
  return finder 
}

function sortAccountsByLastName(accounts) {
  let sort = accounts.sort((accountA, accountB) => accountA.name.last > accountB.name.last ? 1 : -1)
  return sort 
}

  function getTotalNumberOfBorrows(account, books) {
    const {id} = account;
    let total =0;
    for (let i=0; i<books.length ; i++ ){
      let borrows = books[i].borrows;
      
      for (let j=0 ; j < borrows.length ; j++){
        let insideId=borrows[j].id;
         if ( insideId === id){
            total++ }
      }
    }
    return total
    }

  function getBooksPossessedByAccount(account, books, authors) {
    let idUser= account.id;
    console.log(idUser)
    let result=[];
    for (let i=0 ; i< books.length ; i++){
      let arrayOfborrows =books[i].borrows; 
      let filterAarr = arrayOfborrows.filter(
        (borrow)=>idUser ===borrow.id && borrow.returned === false  ) 
    if (filterAarr.length > 0 ){ 
          books[i]
          let book = {};
          Object.assign(book, books[i]);
         
          let authorObj =  authors.find((author)=> author.id === book.authorId)  
          book ={ ... book , author: authorObj}
          result.push(book)
        }
    }   
    return result
     }

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};

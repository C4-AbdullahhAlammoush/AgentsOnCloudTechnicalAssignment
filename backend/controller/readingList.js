const connection = require("../database/db");

const addToReadingList = (req, res) => {
  const userId = req.params.userid;
  const bookWeWantToAdd = req.body.book;
  const query = `insert into readingList (book) values (?) where id=${userId}`;
  const data = [bookWeWantToAdd];
  connection.query(query, data, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json({
        success: false,
        message: "No books were added to list ",
        result: err,
      });
    } else {
      res.status(200).json({
        success: true,
        message: "the books were added to list ",
        result: result,
      });
    }
  });
};

const removeBookFromList = (req, res) => {
  const deletedBook = req.params.id;
  const query = `delete from booksTable where id=${deletedBook}`;
  const data = [deletedBook];
  connection.query(query, data, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json({
        success: false,
        message: "No books were removed from list",
        result: err,
      });
    } else {
      res.status(200).json({
        success: true,
        message: "the books were removed from list",
        result: result,
      });
    }
  });
};
module.exports = { bookWeWantToAdd, removeBookFromList };

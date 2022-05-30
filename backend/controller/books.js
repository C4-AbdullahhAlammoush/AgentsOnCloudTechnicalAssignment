const connection = require("../database/db");

const addBooks = (req, res) => {
  //   const thePublisher = req.parmas.Email;
  const { bookName, AuthorName, Price, category, image_ } = req.body;
  const query = `insert into booksTable (bookName, AuthorName, Price, category,image_) values (?,?,?,?,?)`;
  const data = [bookName, AuthorName, Price, category, image_];
  connection.query(query, data, (err, result) => {
    if (err) {
      console.log(err);
      res
        .status(500)
        .json({ success: false, message: "No books were added", result: err });
    } else {
      res.status(200).json({
        success: true,
        message: "the books were added",
        result: result,
      });
    }
  });
};

const deleteBooks = (req, res) => {
  const deletedBook = req.params.id;
  const query = `delete from booksTable where id=${deletedBook}`;
  const data = [deletedBook];
  connection.query(query, data, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json({
        success: false,
        message: "No books were deleted",
        result: err,
      });
    } else {
      res.status(200).json({
        success: true,
        message: "the books were deleted",
        result: result,
      });
    }
  });
};
module.exports = { addBooks, deleteBooks };

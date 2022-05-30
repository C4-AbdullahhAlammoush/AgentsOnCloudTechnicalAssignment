const connection = require("../database/db");
const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");
const saltRounds = 10;

const createNewAccount = async (req, res) => {
  const { FirstName, LastName, Email, Password } = req.body;

  const encryptedPassword = await bcrypt.hash(Password, saltRounds);

  const query = `INSERT INTO userTable (FirstName,
    LastName,
    Email,
    Password) VALUES (?,?,?,?)`;
  const data = [FirstName, LastName, Email, encryptedPassword];
  connection.query(query, data, (err, results) => {
    if (err) {
      res.status(409).json({
        success: false,
        massage: "This email already exists",
        results: err,
      });
    }

    res.status(200).json({
      success: true,
      massage: "Account has been created successfully",
      results: results,
    });
  });
};

module.exports = {
  createNewAccount,
};

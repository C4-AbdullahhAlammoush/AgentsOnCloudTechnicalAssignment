const connection = require("../database/db");

const addRole = (req, res) => {
  const userId = req.params.id;

  const role = req.body.role_id;
  const query = `update userTable set role_id=? where id=${userId}`;
  const data = [role];
  connection.query(query, data, (err, result) => {
    if (err) {
      console.log(err);
      res
        .status(500)
        .json({ success: false, message: "No roll was added", result: err });
    } else {
      res
        .status(200)
        .json({ success: true, message: "role was added", result: result });
    }
  });
};
module.exports = { addRole };

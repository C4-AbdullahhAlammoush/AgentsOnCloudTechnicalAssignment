const connection = require("../database/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const login = (req, res) => {
  const Email = req.body.Email; // toLowerCase() feature
  const password = req.body.Password;

  const query = `SELECT * FROM userTable WHERE Email=?`;
  const data = [Email];
  connection.query(query, data, (err, results) => {
    console.log(results);
    if (err) throw err;
    if (results.length > 0) {
      console.log("lknl;pnp;kn;kn");
      bcrypt.compare(password, results[0].Password, (err, response) => {
        if (err) res.json(err);
        if (response) {
          console.log("any");
          console.log("apofasmf[asmf[asodm[sadoma[sdma[");

          // res.json(results)
          const paylod = {
            userId: results[0].id,
            Phone_number: results[0].Phone_number,
            role: results[0].role_id,
          };
          console.log(
            paylod.userId,
            "    ",
            paylod.Phone_number,
            "      ",
            paylod.role_id
          );
          const secret = process.env.SECRET;

          const token = jwt.sign(paylod, secret);
          res.status(200).json({ results: results[0], token: token });
        }
      });
    } else {
      return res
        .status(404)
        .json({ success: false, massege: "The Email doesn't exist", err });
    }
  });
};

module.exports = {
  login,
};

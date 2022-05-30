const express = require("express");
const cors = require("cors");
require("dotenv").config();

const db = require("./database/db");

const app = express();
app.use(cors());
app.use(express.json());
const PORT = 5000;

//Import Routers
const signUpRouter = require("./routes/signUpR");
const loginRouter = require("./routes/signInR");
const roleRouter = require("./routes/roleR");
const booksRouter = require("./routes/booksR");
////////////////////////////////////////////////
//Router middleware
app.use("/user", signUpRouter);
app.use("/useIn", loginRouter);
app.use("/addrole", roleRouter);
app.use("/books", booksRouter);

////////////////////////////////////////////////
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

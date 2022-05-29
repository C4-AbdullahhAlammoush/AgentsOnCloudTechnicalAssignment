const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(cors());
app.use(express.json());
const PORT = 5000;
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const express = require("express");
const { login } = require("../controller/signIn");
const loginRouter = express.Router();
//main route is user

loginRouter.post("/logIn", login);

module.exports = loginRouter;

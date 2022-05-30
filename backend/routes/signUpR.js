const express = require("express");
const { createNewAccount } = require("../controller/signUp");

const signUpRouter = express.Router();
//main route is user
signUpRouter.post("/signUp", createNewAccount);

module.exports = signUpRouter;

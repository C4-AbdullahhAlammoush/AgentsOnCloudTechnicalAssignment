const express = require("express");

const { addRole } = require("../controller/role");

const roleRouter = express.Router();
roleRouter.put("/role/:id", addRole);
module.exports = roleRouter;
